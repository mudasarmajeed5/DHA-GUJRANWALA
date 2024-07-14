"use client"
import "./Carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";
const Carousel = () => {
    const CarouselData = {
        "slides": [
            {
                "id" : "1",
                "src": "https://www.dhagwa.com/Content/Images/DHA%20Office%20Complex.jpeg",
                "alt": "LipGloss",
                "text": "AESTHETICALLY FUTURISTIC"
            },
            
            {
                "id" : "3",
                "src": "/sliderimages/ARY-Laguna-Gujranwala-DHA-Gujranwala.jpg",
                "alt": "Makeup",
                "text": "AESTHETICALLY FUTURISTIC"
            },
            {   
                "id" : "4",
                "src": "/sliderimages/10 Marla Villas.jpg",
                "alt": "Makeup",
                "text": "SURGING AHEAD"
            },
            {
                "id" : "2",
                "src": "/sliderimages/third image.jpg",
                "alt": "Unstitched Cotton",
                "text": "SURGING AHEAD"
            },
        ]
    }
    let Imagedata = CarouselData.slides;
    // Auto slideShow
    useEffect(() => {
        const intervalId = setInterval(() => {
            setslide(prevSlide => (prevSlide === Imagedata.length - 1 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    const [slide, setslide] = useState(0);
    const nextSlide = () => {
        setslide(slide == Imagedata.length - 1 ? 0 : slide + 1);
    }
    const preSlide = () => {
        setslide(slide == 0 ? Imagedata.length - 1 : slide - 1);
    }

    return (
        <div className="carousel w-full mt-[-7px] relative">
        <MdArrowBackIos className="arrow arrow-left" onClick={preSlide} />
        {Imagedata.map((image, index) => (
            <div key={index} className="Carousel-main overflow-clip relative">
                <img 
                    src={image.src} 
                    draggable={false} 
                    alt={image.alt} 
                    key={image.id} 
                    className={`${slide == index ? "slide" : "slide slide-hidden"} object-cover md:w-[93vw] object-center h-[80vh]`} 
                />
                <div className="shadow-overlay"></div> {/* Add shadow overlay */}
                <div className={`${slide == index ? "slide Carouseltext" : "slide slide-hidden"} `}>
                    <div className="text-[--carouseltext] font-mono font-bold">
                        {image.text}
                    </div>
                </div>
            </div>
        ))}
        <MdArrowForwardIos className="arrow arrow-right" onClick={nextSlide} />
        <span className="indicators">
            {Imagedata.map((_, index) => (
                <button 
                    className={slide == index ? "indicator" : "indicator indicator-inactive"} 
                    key={index} 
                    onClick={() => { setslide(index); }}
                ></button>
            ))}
        </span>
    </div>
    );
}

export default Carousel;