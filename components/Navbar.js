'use client'
import "./Navbar.css"
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
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
  const toggleOngoingProjects = () => {
    setIsOngoingProjectsOpen(!isOngoingProjectsOpen);
  };
  const toggleProjects = () => {
    closeAllDropdowns();
    setIsProjectsOpen(!isProjectsOpen);
  };

  const toggleDha = () => {
    closeAllDropdowns();
    setIsDhaOpen(!isDhaOpen);
  };

  const toggleAbout = () => {
    closeAllDropdowns();
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleMedia = () => {
    closeAllDropdowns();
    setIsMediaOpen(!isMediaOpen);
  };

  const router = useRouter()
  return (
    <div className='text-center bg-white sticky top-0 py-0 px-4 grid md:place-items-start justify-items-start place-items-start md:grid-cols-3 grid-cols-2 grid-rows-1 text-[--text-color] z-50'>


      <div onClick={() => router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">
        <img src="https://i.ibb.co/RQ2Lj7c/dhalogo.png" width={150} alt="" />
      </div>



      <div className="md:flex place-self-center gap-0 hidden" >
        {/* Projects Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] transition-all flex justify-center items-center"
            onClick={toggleProjects}
          >
            <span>Projects</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isProjectsOpen && (
            <div className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"><span>Upcoming</span><span><FaArrowRight /></span></a>
                </li>
                <li>
                  <span href="#" onClick={toggleOngoingProjects} className="hover:cursor-pointer items-center px-4 py-2 flex justify-between hover:bg-gray-100">
                    <span>Ongoing Projects</span><span><FaArrowRight /></span>
                  </span>
                  {isOngoingProjectsOpen && (
                    <div className="absolute left-44 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <a href="2marlacommercial" className="block px-4 py-2 hover:bg-gray-100">2 Marla Commercial</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">4 Marla Commercial</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">6 Marla Commercial</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#" className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"><span>Delivered</span><span><FaArrowRight /></span></a>
                </li>
                <li>
                  <a href="#" className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"><span>JV Projects</span><span><FaArrowRight /></span></a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* DHA Assist Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] transition-all flex justify-center items-center"
            onClick={toggleDha}
          >
            <span>DHA Assist</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isDhaOpen && (
            <div className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Procedure</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Payment voucher</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Important notices</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Building control</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Froms</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Registered Dealers</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* About Us Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] transition-all flex justify-center items-center"
            onClick={toggleAbout}
          >
            <span>About Us</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isAboutOpen && (
            <div className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Story</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Media DropDown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] transition-all flex justify-center items-center"
            onClick={toggleMedia}
          >
            <span>Media</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isMediaOpen && (
            <div className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Images</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Videos</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">3D Tour / Maps</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="contact place-self-center md:flex hidden gap-1">
        <button className="rounded-full px-2 border border-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 text-sm flex gap-1 justify-center items-center"><span><IoCallSharp /></span><span>Sales Office</span></button>
        <button className="rounded-full px-2 flex gap-1 justify-center items-center hover:bg-green-700 hover:text-white transition-all duration-300 text-sm py-1 border border-green-600"><span><FaWhatsapp /></span><span>Whatsapp</span></button>
        <button className="rounded-full px-2 flex gap-1 justify-center items-center text-black border-green-600 transition-all duration-300 text-sm py-1 hover:text-white border hover:bg-green-900">Become JV Partner</button>
      </div>


      <div className="place-self-center justify-self-end">
        <div className="md:hidden justify-center text-2xl flex items-center">
          <span onClick={() => { setDropDown(!DropDown); }} className="z-10 relative">{DropDown ? <RxCross1 className="text-white" /> : <RiMenu3Line />}</span>
          <div className="flex flex-col gap-3">
            <ul className={`${DropDown ? 'HamBurger_DropDown ' : 'hidden'} text-white`}>
              <div className="mt-[15%] px-2">

                {/* Projects Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={toggleProjects}
                  >
                    <span>Projects</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isProjectsOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-4/5 mx-auto">
                      <ul className="py-2 text-sm">
                        <li className="IsProjectsOpen">
                          <a href="#" className="px-2 py-2 flex justify-between items-center"><span>Upcoming</span><span><FaArrowRight /></span></a>
                        </li>
                        <li className={`IsProjectsOpen ${isOngoingProjectsOpen ? 'border border-[#066192]':''}`}>
                          <span
                            href="#"
                            onClick={toggleOngoingProjects}
                            className="hover:cursor-pointer items-center px-2 py-2 flex justify-between"
                          >
                            <span>Ongoing Projects</span>
                            <span className={`transition-transform duration-500 ${isOngoingProjectsOpen ? 'rotate-90' : 'rotate-0'}`}>
                              <FaArrowRight />
                            </span>
                          </span>

                          {isOngoingProjectsOpen && (
                            <div className="relative z-10 divide-y divide-gray-100 h-0 rounded-lg w-44 mt-2">
                              <ul className="py-2 text-sm">
                                <li>
                                  <a href="/2marlacommercial" className="block py-2 px-2 hover:underline underline-offset-4">2 Marla Commercial</a>
                                </li>
                                <li>
                                  <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">4 Marla Commercial</a>
                                </li>
                                <li>
                                  <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">6 Marla Commercial</a>
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
                    onClick={toggleDha}
                  >
                    <span>DHA Assist</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isDhaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Procedure</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Payment voucher</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Important notices</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Building control</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Froms</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-2 hover:underline underline-offset-4">Registered Dealers</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* About Us Dropdown */}
                <div className="px-2 py-1  rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={toggleAbout}
                  >
                    <span>About Us</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isAboutOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">Our Story</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">Team</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">Careers</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Media DropDown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={toggleMedia}
                  >
                    <span>Media</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isMediaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">Images</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">Videos</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 hover:underline underline-offset-4 py-2">3D Tour/Map</a>
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