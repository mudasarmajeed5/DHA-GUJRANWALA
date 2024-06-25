import React from 'react'
import { MdOutlineConstruction } from "react-icons/md";
import { FaFile, FaAddressCard, FaTableTennis, FaRegShareSquare, FaHome } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoLogoWindows } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
const DownloadApp = () => {
    return (
        <div className='mt-[10vh] md:flex-row flex-col flex justify-between'>
            <div className='w-full md:w-1/2 py-2 px-8'>
                <p className='text-gray-800 text-sm px-4 font-bold pt-14 pb-6 '>A DIGITAL EXPERIENCE ————————</p>
                <h1 className='text-5xl  p-2 font-mono leading-[1.2]'>THE ONE APP YOU NEED FOR ALL YOUR PROPERTY NEEDS</h1>
                <div className="flex gap-4">
                    <ul className='p-4'>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><MdOutlineConstruction />
                            </span>
                            <span>Construction updates</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaFile />
                            </span>
                            <span>Property-related transfers</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaAddressCard />
                            </span>
                            <span>Ownership updates</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaTableTennis /></span>
                            <span>Move In/Out requests</span>
                        </li>
                    </ul>
                    <ul className='p-4'>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaRegShareSquare />
                            </span>
                            <span>Access card requests</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaArrowsRotate /></span>
                            <span>Online payments</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><TbBrandBooking /></span>
                            <span>Amenities booking</span>
                        </li>
                        <li class="flex items-center py-2 gap-2 px-2 hover:bg-gray-200 transition-all cursor-pointer">
                            <span className="text-2xl rounded-full bg-gray-300 p-2"><FaHome /></span>
                            <span>ECM & Home services</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-600 border"></div>
                <div className="playstore">
                    <h1 className="text-3xl text-center m-2 py-4">Download our App to connect with us</h1>
                    {/* Downloadable icons */}
                    <ul className="flex gap-4 rounded-md bg-gray-300 max-w-fit mx-auto justify-center">
                        <li className="flex items-center hover:bg-gray-400 p-2 px-5 hover:cursor-pointer transition-all gap-2">
                            <span>
                                <BiLogoPlayStore size={24} />
                            </span>
                            <span>Playstore</span>
                        </li>
                        <li className="flex items-center hover:bg-gray-400 p-2 px-5 hover:cursor-pointer transition-all gap-2">
                            <span>
                                <IoLogoAppleAppstore size={24} />
                            </span>
                            <span>Applestore</span>
                        </li>
                        <li className="flex items-center hover:bg-gray-400 p-2 px-5 hover:cursor-pointer transition-all gap-2">
                            <span>
                                <IoLogoWindows size={24} />
                            </span>
                            <span>Windows</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-1/2 p-3 flex justify-center items-center'>
                <img className='w-3/5' src="https://www-emaar-com.azureedge.net/wp-content/uploads/2023/10/digital-experiance.png" alt="" />
            </div>
        </div>
    )
}

export default DownloadApp