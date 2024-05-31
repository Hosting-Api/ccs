import React from "react";
import { motion } from "framer-motion";

const slides = [
    {
        image: "/LOGOS/1.png",
        link: "#"
    },
    {
        image: "/LOGOS/2.png",
        link: "#"
    },
    {
        image: "/LOGOS/3.png",
        link: "#"
    },
    {
        image: "/LOGOS/4.png",
        link: "#"
    },
    {
        image: "/LOGOS/5.png",
        link: "#"
    },
    {
        image: "/LOGOS/6.png",
        link: "#"
    },
    {
        image: "/LOGOS/7.png",
        link: "#"
    },
    {
        image: "/LOGOS/8.png",
        link: "#"
    },
    {
        image: "/LOGOS/9.png",
        link: "#"
    },
    {
        image: "/LOGOS/10.png",
        link: "#"
    },
    {
        image: "/LOGOS/11.png",
        link: "#"
    },
    {
        image: "/LOGOS/12.png",
        link: "#"
    },
    {
        image: "/images/aroma-spa-logo.png",
        link: "#"
    },
    {
        image: "/LOGOS/14.png",
        link: "#"
    }
];

const SliderDesign = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary">
            <motion.div
                className="flex"
                animate={{
                    // x: ["-100%", "0%"],
                    x: ["0%", "-100%"],
                    transition: {
                        ease: "linear",
                        duration: 50,
                        repeat: Infinity
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${200 / (1 * slides.length)}%` }}
                    >
                        <div className="flex items-center justify-center h-full py-4  ">
                            <a
                                href={slide.link}
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={slide.image}
                                    // alt={`Slide ${index + 1}`}
                                    alt="img23949"
                                    className="max-h-full max-w-full"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign;
