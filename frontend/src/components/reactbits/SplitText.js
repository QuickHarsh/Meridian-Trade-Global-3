import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

export const SplitText = ({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const words = text.split(' ').map(word => word.split(''));

    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSpring({
        from: animationFrom,
        to: inView ? animationTo : animationFrom,
        config: { easing },
        delay: (i) => i * delay,
    });

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{ textAlign, display: 'inline', overflow: 'hidden' }}
        >
            {words.map((word, i) => (
                <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, j) => {
                        const index = words
                            .slice(0, i)
                            .reduce((acc, w) => acc + w.length, 0) + j;

                        return (
                            <animated.span
                                key={index}
                                style={{
                                    ...springs,
                                    display: 'inline-block',
                                    willChange: 'transform, opacity',
                                }}
                            >
                                {letter}
                            </animated.span>
                        );
                    })}
                    <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
};
