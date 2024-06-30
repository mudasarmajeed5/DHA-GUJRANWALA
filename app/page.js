'use client'
import { useState, useEffect } from "react";
import Contactform from "@/components/Contactform";
import { FaArrowUp } from "react-icons/fa6";
import Carousel from "@/components/Carousel";
import DownloadApp from "@/components/DownloadApp";
import MultiImageSlider from "@/components/MultiImageSlider";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showMobileDiv, setShowMobileDiv] = useState(false);
  const [showSearchDiv, setShowSearchDiv] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
        setShowMobileDiv(true);
      } else {
        setShowButton(false);
        setShowMobileDiv(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleSearchDiv = () => {
    setShowSearchDiv(!showSearchDiv);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (<>
    <marquee behavior="" direction="horizontal" className='text-white bg-green-700'>DHA Gujranwala has introduced 2 marla commercial plots for sale in developed sectors. For more information, please contact the sales office. Thank you.</marquee>
    <Carousel/>
    <button className="fixed rounded-md hover:text-white md:hidden transition-all duration-300 p-1 right-2 bottom-2 text-5xl text-green-500 z-20"><IoLogoWhatsapp /></button>
    <main className="min-h-screen relative">
      <div className="hidden rounded-full mt-[-13vh] md:flex max-w-fit flex-row gap-4 py-2 bg-[#ffffffa8] mx-auto w-60vw justify-start px-8 items-center">
        <label htmlFor="propertyType" className="text-black">Property Type</label>
        <select id="propertyType" name="propertyType" className="border rounded-md py-1  border-gray-300 p-2">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <label htmlFor="propertySize" className="text-black">Property Size</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1  border-gray-300 p-2 ">
          <option value="5marla">5 Marla</option>
          <option value="10marla">10 Marla</option>
          <option value="15marla">15 Marla</option>
          <option value="1kanal">1 Kanal</option>
        </select>
        <label htmlFor="pricerange" className="text-black">Price Range</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1 border-gray-300 p-2 ">
          <option value="5marla">30M</option>
          <option value="10marla">50M</option>
          <option value="15marla">70M</option>
          <option value="1kanal">100M</option>
        </select>
        <button className="text-white bg-green-700 hover:bg-green-900 hover:text-white px-4 py-1 rounded">Search</button>
      </div>

      <div className="py-5 md:mt-[20vh]">
        <div className="w-1/2 my-2 mx-auto md:text-left text-center md:mx-16">
        <p className="text-lg my-5 md:text-left text-center underline font-bold">COMMUNITIES</p>
        <h1 className="md:text-3xl md:text-left text-center  font-bold text-2xl">
        FEATURED COMMUNITIES</h1></div>
      <MultiImageSlider/>
      </div>
      {/* <Gallery/> */}
      <DownloadApp/>
      <div className="bg-gray-700 border mt-10 mb-5"></div>
      <Contactform/>
      {/* contact from */}

    </main>



    {/* Scroll to top button */}
    {showButton && (
      <div
        onClick={scrollToTop}
        className='fixed bottom-4 left-2 z-50 border border-black p-3 rounded-full cursor-pointer shadow-lg'
      >
        <span className="text-black"><FaArrowUp /></span>
      </div>)
    }
    {/* Search categories of homes */}
    {showMobileDiv && (
      <div className='z-10 fixed bottom-0 text-sm left-0 w-full flex justify-center gap-1 py-4 md:hidden bg-white'>
        <button onClick={toggleSearchDiv} className='bg-white text-black border border-black px-2 py-1'>
          {showSearchDiv ? 'Close menu' : 'Explore categories'}
        </button>

        <button className='bg-white text-black border border-black px-4 py-2'>
          Show More
        </button>
      </div>
    )}
    {showSearchDiv && (
      <div
        className='fixed top-0 left-0 flex justify-center items-center flex-col w-screen h-screen bg-gray-800 gap-4 text-white z-[5] transition-all duration-500'
        onClick={() => { toggleSearchDiv(); }}
      >
        <label htmlFor="propertyType">Property Type</label>
        <select id="propertyType" name="propertyType" className="border bg-black border-gray-300 p-2">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <label htmlFor="propertySize">Property Size</label>
        <select id="propertySize" name="propertySize" className="border bg-black border-gray-300 p-2">
          <option value="5marla">5 Marla</option>
          <option value="10marla">10 Marla</option>
          <option value="15marla">15 Marla</option>
          <option value="1kanal">1 Kanal</option>
        </select>
        <label htmlFor="pricerange" className="text-white">Price Range</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1 bg-black p-2 ">
          <option value="5marla">30M</option>
          <option value="10marla">50M</option>
          <option value="15marla">70M</option>
          <option value="1kanal">100M</option>
        </select>
        <button className="bg-blue-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded">Search</button>

      </div>
    )}
  </>
  );
}
