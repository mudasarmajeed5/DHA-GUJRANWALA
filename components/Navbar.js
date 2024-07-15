'use client'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight, FaPhone, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaEarthAsia, FaMapLocationDot } from "react-icons/fa6";
import { SlGrid } from "react-icons/sl";
import { IoCallSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [DropDown, setDropDown] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDhaOpen, setIsDhaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isOngoingProjectsOpen, setIsOngoingProjectsOpen] = useState(false);
  const closeAllDropdowns = () => {
    setIsProjectsOpen(false);
    setIsDhaOpen(false);
    setIsAboutOpen(false);
    setIsMediaOpen(false);
    setIsOngoingProjectsOpen(false);
  };
  const toggleOngoingProjects = (value) => {
    setIsOngoingProjectsOpen(value);
  };
  const toggleProjects = (value) => {
    closeAllDropdowns();
    setIsProjectsOpen(value);
  };

  const toggleDha = (value) => {
    closeAllDropdowns();
    setIsDhaOpen(value);
  };

  const toggleAbout = (value) => {
    closeAllDropdowns();
    setIsAboutOpen(value);
  };

  const toggleMedia = (value) => {
    closeAllDropdowns();
    setIsMediaOpen(value);
  };

  const router = useRouter()
  return (
    <div className='text-center bg-[--bg-color] sticky top-0 py-1 px-4 grid md:place-items-start justify-items-start place-items-start md:grid-cols-3 grid-cols-2 grid-rows-1 text-[--text-color] z-50'>


      <div onClick={() => router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">
        <img src="/dhalogo.png" width={150} alt="" />
      </div>



      <div className="md:flex ml-[-5%] place-self-center gap-0 hidden" >
        {/* Projects Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleProjects(true)}
            onMouseLeave={() => toggleProjects(false)}
          >
            <span>Projects</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isProjectsOpen && (
            <div
              onMouseEnter={() => toggleProjects(true)}
              onMouseLeave={() => toggleProjects(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Upcoming</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    <span><FaArrowRight /></span>
                  </a>
                </li>
                <li>
                  <a
                    onMouseEnter={() => toggleOngoingProjects(true)}
                    onMouseLeave={() => toggleOngoingProjects(false)}
                    className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group cursor-pointer"
                  >
                    <span>Ongoing Projects</span>
                    <span className="absolute left-0 top-0 bottom-0 bg-[--secondary-button] z-[-100] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    <span><FaArrowRight /></span>
                  </a>
                  {isOngoingProjectsOpen && (
                    <div
                      onMouseEnter={() => toggleOngoingProjects(true)}
                      onMouseLeave={() => toggleOngoingProjects(false)}
                      className="absolute left-44 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <a href="2-marla-commercial" className="block px-4 py-2 hover:bg-[--secondary-button] transition-all duration-300 ease-in-out">2 Marla Commercial</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-[--secondary-button] transition-all duration-300 ease-in-out">4 Marla Commercial</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-[--secondary-button] transition-all duration-300 ease-in-out">6 Marla Commercial</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Delivered</span>
                    <span className="absolute left-0 top-0 bottom-0 bg-[--secondary-button] z-[-100] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    <span><FaArrowRight /></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>JV Projects</span>
                    <span className="absolute left-0 top-0 bottom-0 bg-[--secondary-button] z-[-100] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    <span><FaArrowRight /></span>
                  </a>
                </li>
              </ul>
            </div>
          )}

        </div>

        {/* DHA Assist Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleDha(true)}
            onMouseLeave={() => toggleDha(false)}
          >
            <span>DHA Assist</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isDhaOpen && (
            <div
              onMouseEnter={() => toggleDha(true)}
              onMouseLeave={() => toggleDha(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Procedure</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Payment voucher</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Important notices</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Building control</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Forms</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Registered Dealers</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>


        {/* About Us Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleAbout(true)}
            onMouseLeave={() => toggleAbout(false)}
          >
            <span>About Us</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isAboutOpen && (
            <div
              onMouseEnter={() => toggleAbout(true)}
              onMouseLeave={() => toggleAbout(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <a href="/aboutus" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Our Story</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="/leaders" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Leaders</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Careers</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Media DropDown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleMedia(true)}
            onMouseLeave={() => toggleMedia(false)}
          >
            <span>Media</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isMediaOpen && (
            <div
              onMouseEnter={() => toggleMedia(true)}
              onMouseLeave={() => toggleMedia(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Images</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Videos</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>3D Tour / Maps</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>

      <div className="contact ml-[-5%] place-self-center md:flex hidden gap-1">
        <button className="rounded-full px-1 border-2 border-[--secondary-button] hover:bg-[--secondary-button] hover:text-white transition-all duration-300 flex gap-1 justify-center items-center"><span><IoCallSharp /></span><span>Sales Office</span></button>
        <button className="rounded-full px-2 flex justify-center items-center hover:bg-[--secondary-button] hover:text-white transition-all duration-300 py-1 border-2 border-[--secondary-button] overseasportal"><span className="rotate-90"><FaEarthAsia /></span><span>verseas Portal</span></button>
        <button className="rounded-full px-2 flex justify-center items-center text-[--text-color] transition-all duration-300 py-1 hover:text-white border-2 border-[--secondary-button] hover:bg-[--secondary-button]">Become JV Partner</button>
      </div>


      <div className="place-self-center justify-self-end">
        <div className="md:hidden justify-center text-2xl flex items-center">
          <div>
            <span className="z-10 relative">
              {DropDown ? (
                  <RxCross2 onClick={() => setDropDown(!DropDown)} className="text-[--text-color] relative z-20" />
              ) : (
                <span className="flex gap-1 text-[20px] text-[--secondary-button] font-extralight items-center">
                  <FaSearch /> |
                  <FaMapLocationDot /> |
                  <FaPhone />| 
                  <span onClick={() => setDropDown(!DropDown)} className="cursor-pointer">
                    <SlGrid />
                  </span>
                </span>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <ul className={`${DropDown ? 'HamBurger_DropDown ' : 'hidden'} text-[--text-color] bg-[--bg-color]`}>
              <div className="mt-[15%] px-2">

                {/* Projects Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleProjects(!isProjectsOpen)}
                  >
                    <span>Projects</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isProjectsOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg">
                      <ul className="py-2 text-sm">
                        <li className="IsProjectsOpen">
                          <a href="#" className="px-2 py-2 flex justify-between items-center"><span>Upcoming</span><span><FaArrowRight /></span></a>
                        </li>
                        <li className={`IsProjectsOpen`}>
                          <span
                            href="#"
                            onClick={() => toggleOngoingProjects(!isOngoingProjectsOpen)}
                            className="hover:cursor-pointer items-center px-2 py-2 flex justify-between"
                          >
                            <span>Ongoing Projects</span>
                            <span className={`transition-transform duration-500 ${isOngoingProjectsOpen ? 'rotate-90' : 'rotate-0'}`}>
                              <FaArrowRight />
                            </span>
                          </span>

                          {isOngoingProjectsOpen && (
                            <div className="relative z-10 divide-y divide-gray-100">
                              <ul className="py-2 text-sm">
                                <li>
                                  <a href="/2-marla-commercial" className="block py-2 px-2 hover:text-[--secondary-button]">2 Marla Commercial</a>
                                </li>
                                <li>
                                  <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">4 Marla Commercial</a>
                                </li>
                                <li>
                                  <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">6 Marla Commercial</a>
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li className="IsProjectsOpen">
                          <a href="#" className="py-2 px-2 flex justify-between items-center"><span>Delivered</span><span><FaArrowRight /></span></a>
                        </li>
                        <li className="IsProjectsOpen">
                          <a href="#" className=" py-2 px-2 flex justify-between items-center"><span>JV Projects</span><span><FaArrowRight /></span></a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* DHA Assist Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleDha(!isDhaOpen)}
                  >
                    <span>DHA Assist</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isDhaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Procedure</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Payment voucher</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Important notices</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Building control</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Froms</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:text-[--secondary-button]">Registered Dealers</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* About Us Dropdown */}
                <div className="px-2 py-1  rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleAbout(!isAboutOpen)}
                  >
                    <span>About Us</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isAboutOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="/aboutus" className="block px-2 hover:text-[--secondary-button] py-2">Our Story</a>
                        </li>
                        <li>
                          <a href="/leaders" className="block px-2 hover:text-[--secondary-button] py-2">Leaders</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:text-[--secondary-button] py-2">Careers</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Media DropDown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleMedia(!isMediaOpen)}
                  >
                    <span>Media</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isMediaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="#" className="block px-2 hover:text-[--secondary-button] py-2">Images</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:text-[--secondary-button] py-2">Videos</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:text-[--secondary-button] py-2">3D Tour/Map</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar