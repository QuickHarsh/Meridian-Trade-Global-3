import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Magnet = ({ children, padding = 100, disabled = false, magnetStrength = 2 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (disabled) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x / magnetStrength, y: y / magnetStrength });
    };

    const handleMouseLeave = () => {
        if (disabled) return;
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};
