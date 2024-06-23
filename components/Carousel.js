"use client"
import "./carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";
const Carousel = () => {
    const CarouselData = {
        "slides": [
            {
                "id" : "1",
                "src": "https://www.dhagwa.com/Content/Images/DHA%20Office%20Complex.jpeg",
                "alt": "LipGloss",
                "text": "Commerical"
            },
            {
                "id" : "2",
                "src": "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/11/Cover-1440x625-1-1.jpg",
                "alt": "Unstitched Cotton",
                "text": "Apartments"
            },
            {
                "id" : "3",
                "src": "https://content-cdn.zameen.com/Enem_Holdings_DHA_Gujranwala_About_projects_8974ee4a01.jpg",
                "alt": "Makeup",
                "text": "Villas"
            }
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
        <div className="carousel w-full">
            <MdArrowBackIos className="arrow arrow-left" onClick={preSlide} />
            {Imagedata.map((image, index) => {
                return (
                    <div key={index} className="Carousel-main overflow-clip">
                        <img src={image.src} draggable={false} alt={image.alt} key={image.id} className={`${slide == index ? "slide" : "slide slide-hidden"} object-cover md:w-[93vw] object-center h-[80vh]`} ></img>
                        <div className={`${slide == index ? "slide Carouseltext" : "slide slide-hidden"} flex w-full flex-col md:items-end items-center md:gap-0 gap-5 px-10 `}>
                            <div className="text-white md:text-2xl text-4xl font-mono font-bold">{image.text}</div>
                            <button className=" bg-blue-800 text-white text-2xl md:text-sm px-2 py-1">View Details</button>
                        </div>
                    </div>
                )
            })}
            <MdArrowForwardIos className="arrow arrow-right" onClick={nextSlide} />
            <span className="indicators">
                {Imagedata.map((_, index) => {
                    return <button className={slide == index ? "indicator" : "indicator indicator-inactive"} key={index} onClick={() => { setslide(index) }}></button>
                })}
            </span>
        </div>
    );
}

export default Carousel;