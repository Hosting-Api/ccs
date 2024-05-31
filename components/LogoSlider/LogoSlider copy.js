import React from "react";
import { motion } from "framer-motion";

const slides = [
    { image: "/images/natural-kitchen.png" },
    { image: "/images/Tandoorhut.png" },
    { image: "/images/aroma-spa-logo.png" },
    { image: "/images/fbi-logo.png" },
    { image: "/images/MaaGangaTitan.png" },
    { image: "/images/sabras.jpg" },
    { image: "/images/sw.jpg" },
    { image: "/images/GREENEES.png" },
    { image: "/images/fbi-logo.png" },
    { image: "/images/MaaGangaTitan.png" },
    { image: "/images/senox.png" }
];

const SliderDesign = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary">
            {/* <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:filter after:blur-3"></div> */}

            <motion.div
                className="flex"
                animate={{
                    x: ["-100%", "0%"],
                    transition: {
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${100 / slides.length}%` }}
                    >
                        <div className="flex items-center justify-center h-full py-4 border-y border-textColorPrimary">
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="max-h-full max-w-full"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign;
