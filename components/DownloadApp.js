import { MdOutlineConstruction } from "react-icons/md";
import { FaFile, FaAddressCard, FaTableTennis, FaRegShareSquare, FaHome, FaApple } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoLogoWindows } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
const DownloadApp = () => {
    return (
        <div className='md:flex-row flex-col text-[--text-color] flex justify-between'>
            <div className='w-full md:w-1/2 py-2 md:px-8 px-2'>
                <p className='px-4 pt-14 pb-2 2xl:text-4xl text-2xl lg:text-3xl my-5 md:text-left text-center underline underline-offset-4 font-bold text-[--secondary-button]'>A DIGITAL EXPERIENCE</p>
                <h1 className='font-bold 2xl:text-3xl text-xl lg:text-2xl p-2 md:text-left text-center text-[--secondary-button] leading-[1.2]'>THE ULTIMATE <span className="text-red-600">APP </span>FOR ALL YOUR PROPERTY NEEDS</h1>
                <div className="flex gap-4">
                    <ul className='md:p-4 p-2'>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><MdOutlineConstruction /></span>
                            <span>Construction progress</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaFile /></span>
                            <span>Property transfers</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaAddressCard /></span>
                            <span>Ownership updates</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaTableTennis /></span>
                            <span>Move In/Out requests</span>
                        </li>
                    </ul>
                    <ul className='md:p-4 p-2'>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaRegShareSquare /></span>
                            <span>Access card requests</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaArrowsRotate /></span>
                            <span>Online payments</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><TbBrandBooking /></span>
                            <span>Amenities booking</span>
                        </li>
                        <li className="flex items-center py-2 2xl:text-2xl lg:text-xl text-md gap-2 px-2 hover:bg-[--download-app-green] transition-all cursor-pointer">
                            <span className="2xl:text-2xl lg:text-xl text-md rounded-full bg-gray-300 text-[--secondary-button] md:p-2 p-1"><FaHome /></span>
                            <span>Home services</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-600 border"></div>
                <div className="playstore">
                    <h1 className="2xl:text-3xl text-2xl text-center text-[--secondary-button] m-2 py-4 font-bold uppercase">Download our App to connect with us</h1>
                    {/* Downloadable icons */}
                    <ul className="flex max-w-fit text-[--secondary-button] md:gap-4 rounded-md mx-auto justify-center">
                        <li className="flex items-center hover:bg-[--text-color] rounded-full xl:p-3 p-2 hover:cursor-pointer transition-all gap-2 ">
                            <span className="text-3xl xl:text-5xl">
                                <BiLogoPlayStore />
                            </span>
                        </li>
                        <li className="flex items-center hover:bg-[--text-color] rounded-full xl:p-3 p-2 hover:cursor-pointer transition-all gap-2 ">
                            <span className="text-3xl xl:text-5xl">
                                <FaApple />
                            </span>
                        </li>
                        <li className="flex items-center hover:bg-[--text-color] rounded-full xl:p-3 p-2 hover:cursor-pointer transition-all gap-2 ">
                            <span className="text-3xl xl:text-5xl">
                                <IoLogoWindows />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-1/2 p-3 flex justify-center items-center'>
                <img className='w-3/5' src="png/png-download-app.png" alt="" />
            </div>
        </div>
    )
}

export default DownloadApp