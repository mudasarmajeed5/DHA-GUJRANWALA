'use client'
import React, { useState, useEffect } from 'react'
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
const BookAnAppointment = () => {

    const [showButton, setShowButton] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        // Save the dark mode state to localStorage
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
            const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
            if (savedDarkMode) {
                document.documentElement.classList.add('dark');
                setDarkMode(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='min-h-screen flex justify-center items-center text-[--text-color]'>
            <div className="flex lg:w-3/5 w-[95vw] mx-auto md:flex-row flex-col-reverse p-6 border-2 bg-background rounded-lg shadow-lg">
                <div className="flex-1 md:m-0 mt-10 md:mr-4">
                    <img
                        src="https://reinvention.vercel.app/dhalogo.png"
                        alt="North Property Group Logo"
                        className="w-[200px] mb-4"
                    />
                    <h2 className="text-xl font-bold">DHA GUJRANWALA</h2>
                    <h3 className="text-lg mt-2">Book a free strategy meeting</h3>
                    <p className="text-muted-foreground mt-1">15 min</p>
                    <p className="mt-2">Free expert advice with no sales pitch!</p>
                    <p className="mt-2">
                        Book your one-to-one session with an experienced property consultant.
                    </p>
                    <p className="mt-2">
                        Clarify your goals, learn about the economics behind successful property
                        purchases, and plan your next steps – then get access to the best.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="text-blue-500 hover:underline">
                            Cookie settings
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-red-500 hover:underline">
                            Report abuse
                        </a>
                    </div>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                    <h4 className="text-lg font-semibold underline underline-offset-4">Select a Date &amp; Time</h4>
                    <div className="flex justify-between items-center mt-2">
                        <button className="p-2 w-10 hover:opacity-80 h-10 bg-[--secondary-button] text-secondary-foreground rounded-full">
                            ◀
                        </button>
                        <span className="font-bold">July 2024</span>
                        <button className="p-2 w-10 hover:opacity-80 h-10 bg-[--secondary-button] text-secondary-foreground rounded-full">
                            ▶
                        </button>
                    </div>
                    <div className="grid grid-cols-7 place-items-center gap-2 mt-4">
                        <div className="text-center font-semibold">MON</div>
                        <div className="text-center font-semibold">TUE</div>
                        <div className="text-center font-semibold">WED</div>
                        <div className="text-center font-semibold">THU</div>
                        <div className="text-center font-semibold">FRI</div>
                        <div className="text-center font-semibold">SAT</div>
                        <div className="text-center font-semibold">SUN</div>
                        <div className="selectdate">1</div>
                        <div className="selectdate">2</div>
                        <div className="selectdate">3</div>
                        <div className="selectdate">4</div>
                        <div className="selectdate">5</div>
                        <div className="selectdate">6</div>
                        <div className="selectdate">7</div>
                        <div className="selectdate">8</div>
                        <div className="selectdate">9</div>
                        <div className="selectdate">10</div>
                        <div className="selectdate">11</div>
                        <div className="selectdate">12</div>
                        <div className="selectdate">13</div>
                        <div className="selectdate">14</div>
                        <div className="selectdate">15</div>
                        <div className="selectdate">16</div>
                        <div className="selectdate">17</div>
                        <div className="selectdate">18</div>
                        <div className="selectdate">19</div>
                        <div className="selectdate">20</div>
                        <div className="selectdate">21</div>
                        <div className="selectdate">22</div>
                        <div className="selectdate">23</div>
                        <div className="selectdate">24</div>
                        <div className="selectdate">25</div>
                        <div className="selectdate">26</div>
                        <div className="selectdate">27</div>
                        <div className="selectdate">28</div>
                        <div className="selectdate">29</div>
                        <div className="selectdate">30</div>
                        <div className="selectdate">31</div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="timezone" className="block font-semibold ">
                            Time zone
                        </label>
                        <select
                            id="timezone"
                            className="mt-1 p-2 border border-border rounded-md w-full bg-[--bg-color]"
                        >
                           <option>Pakistan (PKT), UTC +5:00 (7:22 PM)</option>

                        </select>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="timezone" className="block font-semibold ">
                            Meeting Type
                        </label>
                        <select
                            className="mt-1 p-2 border border-border rounded-md w-full bg-[--bg-color]"
                        >
                            <option>Virtual</option>
                            <option>Office</option>
                        </select>
                    </div>
                    <button className="m-2 px-2 py-1 rounded-md bg-[--secondary-button] hover:bg-[--secondary-button] text-white">Confirm</button>
                </div>
            </div>
            <span className="fixed md:bottom-4 bottom-2 text-red-950 text-xl bg-[--secondary-button] z-50 border-2 rounded-full right-3"><button
                onClick={toggleDarkMode}
                className="p-2"
            >
                {darkMode ? <CgDarkMode /> : <MdLightMode />
                }
            </button></span>
        </div>
    )
}

export default BookAnAppointment