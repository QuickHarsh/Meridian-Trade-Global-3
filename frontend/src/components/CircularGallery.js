import { useRef, useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useAnimation,
    useTransform,
} from "framer-motion";

export const CircularGallery = ({
    items,
    bend = 3,
    textColor = "#ffffff",
    borderRadius = 0.05,
    font = "font-serif",
}) => {
    const containerRef = useRef(null);
    const [radius, setRadius] = useState(200);

    // Drag state
    const x = useMotionValue(0);
    const draggedX = useMotionValue(0);
    const isDragging = useRef(false);

    // Smooth rotation with spring
    const rotateX = useSpring(useTransform(x, (val) => val / bend), {
        stiffness: 150,
        damping: 30,
        mass: 1,
    });

    // Calculate radius based on container width
    useEffect(() => {
        if (!containerRef.current) return;
        const updateRadius = () => {
            const width = containerRef.current.offsetWidth;
            // Adjust radius logic: wider screens = larger radius
            setRadius(Math.min(width / 2.5, 400));
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    const handleDrag = (_, info) => {
        // Accumulate the drag distance to the rotation value
        draggedX.set(draggedX.get() + info.delta.x);
        x.set(draggedX.get());
    };

    const handleDragStart = () => {
        isDragging.current = true;
        document.body.style.cursor = "grabbing";
    };

    const handleDragEnd = () => {
        isDragging.current = false;
        document.body.style.cursor = "grab";
    };

    return (
        <div
            ref={containerRef}
            className="relative flex h-[600px] w-full items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        >
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} // Free drag, creates infinite feel logic via rotation
                dragElastic={0.05} // Low elasticity for smooth feel
                onDrag={handleDrag}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                className="relative flex h-full w-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]"
            >
                <motion.div
                    style={{ rotateY: rotateX }}
                    className="relative flex h-full w-full items-center justify-center [transform-style:preserve-3d]"
                >
                    {items.map((item, index) => {
                        const angle = (360 / items.length) * index;
                        // Place items in a circle
                        const transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

                        return (
                            <div
                                key={item.id}
                                className="absolute flex h-[300px] w-[220px] flex-col items-center justify-center rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 group"
                                style={{
                                    transform: transform,
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "visible", // Show back of cards for realism, or 'hidden' for cleaner look
                                }}
                            >
                                <div className="relative w-full h-[70%] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <div className="h-[30%] w-full flex flex-col items-center justify-center p-4 text-center">
                                    <h3
                                        className={`${font} text-xl tracking-tight`}
                                        style={{ color: textColor }}
                                    >
                                        {item.name}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
                                        {item.materials[0]}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};
