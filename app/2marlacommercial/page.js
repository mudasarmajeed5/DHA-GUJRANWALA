"use client"
import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
const TwoMarlaCommercial = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='min-h-screen'>
                <div>
                    <img src="/2marla.jpg" className='w-screen h-1/2 md:h-[90vh] object-cover object-center' alt="" />
                </div>
                <div className='py-10'>
                    <h1 className="text-3xl lg:text-4xl text-center text-green-700 font-bold my-5">2 Marla Commercial by DHA Gujranwala</h1>
                    <div className="text-center w-full  md:w-3/5 md:mx-auto"><span className="text-center py-2 text-black">Explore the world of DHA Gujranwala's 2 Marla Commercial Plots: Your business's gateway to success!</span>
                        <p className='text-center my-5'>
                        Own a prime commercial space in DHA Gujranwala's developed sectors. These 2 marla plots offer a unique opportunity to establish your business in a thriving community. <br /> For more information <br /> contact the sales office. <br /> Thank you.</p>
                    </div>
                </div>
                <div className="border my-3"></div>
                <div className="text-3xl tracking-widest px-5 flex justify-between text-green-900"><span>Details?</span> <span>Pictures?</span> <span>Benefits?</span></div>
                <div className="border my-3"></div>
                {/* Contact Page */}

                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-1 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
                            <img src="/2marlacontact.jpg" className='md:w-3/5 w-full relative z-10' alt="" />
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-4xl text-green-900 mb-1 uppercase font-medium title-font">
                                Get in Touch
                            </h2>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-22 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">
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
                    className={`fixed bottom-0 z-10 w-full gap-2 text-sm p-2 bg-green-900 flex justify-center items-center shadow-md transition-transform ${show ? 'translate-y-0' : 'translate-y-full'}`}>
                    <button className="border rounded-full bg-transparent border-white shadow-md hover:shadow-green-500 transition-all text-white px-4 py-2 flex items-center gap-1"><span><FaDownload/></span>Brochure<span></span></button>
                    <button className="border rounded-full bg-transparent border-white shadow-md hover:shadow-green-500 transition-all text-white px-4 py-2">Enquire Now</button>
                </div>
            </div>
        </>
    )
}

export default TwoMarlaCommercial