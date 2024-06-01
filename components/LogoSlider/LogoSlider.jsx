import React from "react";
import Image from "next/image";

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
        image: "/LOGOS/13.png",
        link: "#"
    },
    {
        image: "/LOGOS/14.png",
        link: "#"
    }
];

const LogoSlider = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full w-full overflow-hidden ">
{/*         <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary"> */}
            <motion.div
                className="flex"
                animate={{
                    // x: ["-100%", "0%"],
                    x: ["0%", "-100%"],
                    transition: {
                        ease: "linear",
                        duration: 45,
                        repeat: Infinity
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${100 /  slides.length}%` }}
                    >
                        <div className="flex items-center justify-center h-full py-2  ">
                            <a
                                href={slide.link}
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={slide.image}
                                    // alt={`Slide ${index + 1}`}
                                    alt="img23949"
                                    className=""
                                    height={250}
                                    width={250}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoSlider;
