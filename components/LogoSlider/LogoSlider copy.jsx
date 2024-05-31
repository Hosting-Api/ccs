import React from "react";
import Slider from "react-slick";

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        pauseOnHover: true
    };

    const slides = [
        "/images/aroma-spa-logo.png",
        "/images/aroma-spa-logo.png",
        "/images/aroma-spa-logo.png",
        "/images/aroma-spa-logo.png",
        "/images/aroma-spa-logo.png"
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slides.map((src, index) => (
                    <div key={index} className="slide">
                        <img
                            src={src}
                            alt={`slide-${index}`}
                            className="slide-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
