"use client"
import { useState, useEffect } from 'react';

import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
const TwoMarlaCommercial = () => {
    const [darkMode, setDarkMode] = useState(false)
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
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedDarkMode) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='min-h-screen'>
                <div className='border'>
                    <img src="/2marla.jpg" className='object-cover w-screen md:h-screen object-center' alt="" />
                </div>
                <div className='py-10 px-5'>
                    <h1 className="text-3xl 2xl:text-5xl text-center text-[--secondary-button] font-bold my-5">2 Marla Commercial by DHA Gujranwala</h1>
                    <div className="text-center 2xl:text-2xl px-2 text-xl w-full md:w-3/5 md:mx-auto">
                        <span className="text-center py-2 text-[--primary-button]">Explore the world of DHA Gujranwalas 2 Marla Commercial Plots: Your businesss gateway to success!</span>
                        <p className='text-center 2xl:text-2xl px-2 text-xl my-5 text-[--primary-button]'>
                            Own a prime commercial space in DHA Gujranwalas developed sectors. These 2 marla plots offer a unique opportunity to establish your business in a thriving community.
                            <br />
                            For more information, contact the sales office.
                            <br />
                            Thank you.
                        </p>
                    </div>
                </div>

                <div className="border my-3"></div>
                <div className="md:text-3xl text-xl tracking-widest md:px-10 px-4 flex justify-between text-[--secondary-button]"><span>Details?</span> <span>Pictures?</span> <span>Benefits?</span></div>
                <div className="border my-3"></div>
                {/* Contact Page */}

                <section className="text-[--secondary-button] body-font relative">
                    <div className="container px-5 py-1 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="md:w-1/2 w-full rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
                            <img src="/2marlacontact.png" className='md:w-2/5 w-3/5 md:ml-[-40%]  relative z-10' alt="" />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
                            <h2 className="text-5xl text-[--text-button] mb-1 uppercase font-bold title-font">
                                Get in Touch
                            </h2>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-[--text-color] text-xl 2xl:text-2xl">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full rounded border bg-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="phone" className="leading-7 text-[--text-color] text-xl 2xl:text-2xl">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="w-full rounded border bg-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-[--text-color] text-xl 2xl:text-2xl">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full rounded border bg-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-[--text-color] text-xl 2xl:text-2xl">
                                    Message
                                </label>
                                <textarea
                                    placeholder='Leave us a Message!'
                                    id="message"
                                    name="message"
                                    className="w-full rounded border bg-transparent text-base outline-none text-gr1y-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="text-white bg-[--secondary-button] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded 2xl:text-2xl text-xl font-bold">
                                SUBMIT
                            </button>
                            <p className="text-xs text-gray-500 mt-3">
                                DHA Gujranwala needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. please review our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Page */}
                <div
                    className={`fixed bottom-0 z-30 w-full gap-2 text-sm p-2 bg-[--bg-color] flex justify-center items-center shadow-md transition-transform duration-500 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
                    <button className="border rounded-full bg-transparent border-[--secondary-button] transition-all hover:bg-[--secondary-button] text-[--text-color] px-4  py-1 flex items-center gap-1"><lord-icon
                        src="https://cdn.lordicon.com/jkppkiom.json"
                        trigger="loop"
                        state="loop-triangle"
                        colors="primary:teal"
                        style={{ width: "30px", height: "30px" }}>
                    </lord-icon><span>Brochure</span></button>
                    <button className="border flex gap-1 items-center rounded-full bg-transparent border-[--secondary-button] hover:bg-[--secondary-button] transition-all text-[--text-color] px-4 py-1"><lord-icon
                        src="https://cdn.lordicon.com/rsvfayfn.json" colors="primary:teal" trigger="loop"
                        delay="2000"
                        style={{ width: "30px", height: "30px" }}>
                    </lord-icon><span>Enquire Now</span></button>
                </div>
            </div >

            <span className="fixed md:bottom-4 bottom-20 text-red-950 text-2xl bg-[--secondary-button] rounded-full right-3"><button
                onClick={toggleDarkMode}
                className="p-2"
            >
                {darkMode ? <CgDarkMode /> : <MdLightMode />
                }
            </button></span>
        </>
    )
}

export default TwoMarlaCommercial