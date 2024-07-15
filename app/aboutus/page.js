'use client'
import { IoLogoWhatsapp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { MdLightMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const About = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedDarkMode) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);

    return (
        <>
            <a href="https://wa.me/923441234567" className="fixed bottom-2 right-2 p-1 rounded-full text-5xl hover:text-green-200 transition-color duration-300 text-green-400 flex gap-2 z-20">
                <IoLogoWhatsapp />
            </a>
            <div className="flex text-center flex-col bg-[--bg-color] pt-8 justify-center items-center gap-12 aboutus">
                <div className="text-center flex justify-center items-center"><img className='md:w-1/4 w-1/2' src="/PngItem_42885.png" alt="" /></div>
                <div className='flex md:w-2/3 md:px-10 w-10/12 flex-col pb-10 justify-start'>
                    <span className="text-[--text-color] 2xl:text-2xl text-md">
                        Welcome to DHA Gujranwala, where modern living meets historical significance in the heart of the Golden Triangle. Strategically located and connected via economic artery of Pakistan, were committed to reshaping welfare regime & regional living through sustainable development and urban planning. Offering both residential and business opportunities, our meticulously designed community emphasizes smart living and sustainability. Join us in celebrating excellence and embracing a brighter, sustainable future with DHA Gujranwala.
                    </span>
                </div>
            </div>
            <div className="border my-3"></div>
                <div className="md:text-3xl text-xl tracking-widest md:px-10 px-4 flex justify-between text-[--secondary-button]"><span>Vision?</span> <span>Mission?</span> <span>Objective?</span></div>
                <div className="border my-3">

                </div>
           
            <button
                onClick={toggleDarkMode}
                className="fixed bottom-4 left-4 p-1 rounded-full text-white bg-[--secondary-button] transition-color duration-300 flex items-center border-2 text-2xl justify-center z-20"
            >
                {darkMode ? <MdLightMode /> : <CgDarkMode />}
            </button>
        </>
    )
}

export default About;
