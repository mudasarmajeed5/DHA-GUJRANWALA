'use client'
import { useState,useEffect } from "react"

import { MdLightMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
const Leaders = () => {
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
        <div> <section className="text-[--text-color] body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-center items-center w-full mb-20">
                    <img src="https://media.licdn.com/dms/image/C4E12AQGAAjWt4if33w/article-cover_image-shrink_720_1280/0/1579942441914?e=2147483647&v=beta&t=ZFiE8gFUzAaGy0abHrm4slSm12FZDzWH3o81LDKS9Ck" className="text-center" width={600} alt="" />
                </div>
                <div className="flex justify-between  flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img
                                alt="team"
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                src="https://www.dhagwa.com/Content/Images/Chairman_imdad.png"
                            />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-bold text-3xl text-[--secondary-button]">
                                    Lt Gen Syed Imadad Hussain Shah HI (M)
                                </h2>
                                <h3 className="text-[--rich-black] text-xl mb-3">Chairman message</h3>
                                <p className="mb-4">
                                    Celebrating a decade of DHA Gujranwala is a testament to our unwavering commitment to creating a sustainable and harmonious community. Our success is not just about business growth but the positive impact on lives and the environment. We aim to set new standards in sustainable development while preserving natural beauty. This achievement is a result of collective efforts, and with your continued support, DHA Gujranwala will flourish as an example of excellence. Thank you for your trust.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start text-center sm:text-left">
                            <img
                                alt="team"
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                src="https://www.dhagwa.com/Content/Images/PD.png"
                            />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-bold text-3xl text-[--secondary-button]">
                                    Brig Muhammad Aslam Khan Niazi
                                </h2>
                                <h3 className="text-[--rich-black] text-xl mb-3">Project Directory Message</h3>
                                <p className="mb-4">
                                    Contemporary housing is a source of economic growth across the world; it provides opportunities for locals across the region with better standards of living and DHA Gujranwala is here to accomplish that very purpose. The development at site has paced up and the team is working wholeheartedly to produce efficient results. Our plan now is to swiftly start developing state of the art level amenities for town planning. DHA Gujranwala vows to work to the best of its ability and pledges to come with more smart ideas and apt deliveries for the commitments made. May Allah SWT help us in making DHA Gujranwala the land of prosperity and growth. Ameen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button
                onClick={toggleDarkMode}
                className="fixed bottom-4 left-4 p-1 rounded-full text-white bg-[--secondary-button] transition-color duration-300 flex items-center border-2 text-2xl justify-center z-20"
            >
                {darkMode ? <MdLightMode /> : <CgDarkMode />}
            </button>
        </div>
        
    )
}

export default Leaders