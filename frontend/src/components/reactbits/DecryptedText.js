import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * DecryptedText
 *
 * @param {string} text - The final text to display
 * @param {number} speed - The speed of the revelation (ms per character)
 * @param {number} maxIterations - Max number of random characters before revealing the correct one
 * @param {boolean} sequential - If true, reveals characters one by one. If false, reveals all at once but with different iteration counts.
 * @param {number} revealDirection - 1 for left-to-right, -1 for right-to-left (only if sequential is true)
 * @param {boolean} useOriginalCharsOnly - If true, uses only characters from the original text for scrambling
 * @param {string} className - class name for the container
 * @param {string} parentClassName - class name for the parent container
 * @param {boolean} encryptedClassName - class name for the encrypted characters
 * @param {boolean} animateOn - "view" | "hover" - when to start the animation
 */

export const DecryptedText = ({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 1,
    useOriginalCharsOnly = false,
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'view', // 'view' or 'hover'
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const revealedIndices = useRef(new Set());
    const iterationCount = useRef(0);
    const intervalRef = useRef(null);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    useEffect(() => {
        let interval;
        if (animateOn === 'view') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsScrambling(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            // This assumes the parent renders usually, but for a hook we'd need a ref to the element.
            // For now, we'll just trigger it immediately if not using a specific ref, or handled via proper structured ref in a simpler way:
            // Let's rely on the parent wrapper's ref for intersection if possible, or just start it.
            // Actually, let's keep it simple: if 'view', we trigger scramble on mount/hover logic is separate.
        }
    }, [animateOn]);

    // Handle 'view' trigger via simple effect for now, though intersection observer is better inside the component
    const containerRef = useRef(null);

    useEffect(() => {
        if (animateOn === 'view') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !intervalRef.current) {
                        startScramble();
                    }
                },
                { threshold: 0.1 }
            );
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return () => observer.disconnect();
        }
    }, [animateOn, text]);

    const startScramble = () => {
        clearInterval(intervalRef.current);
        revealedIndices.current.clear();
        iterationCount.current = 0;
        setIsScrambling(true);

        intervalRef.current = setInterval(() => {
            setDisplayText((prevText) => {
                let newText = text.split('').map((char, i) => {
                    if (char === ' ') return ' ';
                    if (revealedIndices.current.has(i)) return char;

                    if (Math.random() < 0.1) { // Chance to reveal
                        if (sequential) {
                            if (revealDirection === 1) {
                                // simple sequential logic: if previous is revealed
                                if (i === 0 || revealedIndices.current.has(i - 1)) {
                                    if (Math.random() < 0.4) revealedIndices.current.add(i);
                                }
                            } else {
                                if (i === text.length - 1 || revealedIndices.current.has(i + 1)) {
                                    if (Math.random() < 0.4) revealedIndices.current.add(i);
                                }
                            }
                        } else {
                            if (Math.random() < 0.05) revealedIndices.current.add(i);
                        }
                    }

                    if (revealedIndices.current.has(i)) return char;

                    if (useOriginalCharsOnly) {
                        const positions = text.split('').map((c, idx) => c === char ? idx : null).filter(v => v !== null);
                        // simplistic scramble from original
                        return text[Math.floor(Math.random() * text.length)];
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join('');

                if (revealedIndices.current.size === text.replace(/ /g, '').length) {
                    clearInterval(intervalRef.current);
                    setIsScrambling(false);
                    return text;
                }

                // Force end after max iterations to avoid infinite loops
                iterationCount.current++;
                if (iterationCount.current > maxIterations * text.length) {
                    clearInterval(intervalRef.current);
                    setIsScrambling(false);
                    return text;
                }

                return newText;
            });
        }, speed);
    };

    const handleMouseEnter = () => {
        if (animateOn === 'hover') {
            startScramble();
        }
    }

    // Effect to clean up
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <span
            ref={containerRef}
            className={`${parentClassName} inline-block whitespace-nowrap`}
            onMouseEnter={handleMouseEnter}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
};
