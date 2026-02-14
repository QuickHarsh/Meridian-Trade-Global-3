import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const TiltedCard = ({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = false,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 30, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 30, damping: 15 });

    const rotateX = useTransform(
        mouseY,
        [-0.5, 0.5],
        [rotateAmplitude, -rotateAmplitude]
    );
    const rotateY = useTransform(
        mouseX,
        [-0.5, 0.5],
        [-rotateAmplitude, rotateAmplitude]
    );

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center text-center"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d]"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale: scaleOnHover,
                }}
                whileHover={{ scale: scaleOnHover }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    style={{
                        transform: "translateZ(50px)",
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center"
                        style={{
                            transform: "translateZ(80px)", // Elevate content above image
                        }}
                    >
                        {overlayContent}
                    </motion.div>
                )}

                {/* Glossy Reflection Effect */}
                <div className="absolute inset-0 z-[1] rounded-[15px] bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-[2] flex items-center justify-center opacity-0 transition-opacity duration-300"
                    style={{
                        x,
                        y,
                        rotateX,
                        rotateY,
                        transform: "translateZ(80px)",
                    }}
                >
                    <div className="rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-charcoal shadow-lg backdrop-blur-sm">
                        {captionText}
                    </div>
                </motion.figcaption>
            )}
        </figure>
    );
};
