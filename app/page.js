'use client'
import { useState, useEffect } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";
import Contactform from "@/components/Contactform";
import { FaArrowUp } from "react-icons/fa6";
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
    <img className="w-full h-screen absolute top-0 left-0 object-cover object-center" src="https://www.dhagwa.com/Content/Images/DHA%20Office%20Complex.jpeg" alt=''/>
    
    <main className="min-h-screen relative">

      <div className="socials">
        <button className="rounded-md bg-gray-700 hover:bg-black text-white p-1 hover:right-0 flex gap-2"><span className="text-2xl"><IoLogoInstagram /></span><Link href={'#'} className="show-text">Instagram</Link></button>
        <button className="rounded-md bg-gray-700 hover:bg-black text-white p-1 hover:right-0 flex gap-2"><span className="text-2xl"><IoLogoFacebook /></span><Link href={'#'} className="show-text">Facebook</Link></button>
        <button className="rounded-md bg-gray-700 hover:bg-black text-white p-1 hover:right-0 flex gap-2"><span className="text-2xl"><IoLogoWhatsapp /></span><Link href={'#'} className="show-text">Whatsapp</Link></button>
      </div>


      <div className="hidden rounded-full ml-[2vw] mt-[65vh] md:flex max-w-fit flex-row gap-4 py-4 bg-[#ffffff52] w-60vw justify-start px-8 items-center">
        <label htmlFor="propertyType" className="text-black">Property Type</label>
        <select id="propertyType" name="propertyType" className="border rounded-md py-1   border-gray-300 p-2">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <label htmlFor="propertySize" className="text-black">Property Size</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1   border-gray-300 p-2 ">
          <option value="5marla">5 Marla</option>
          <option value="10marla">10 Marla</option>
          <option value="15marla">15 Marla</option>
          <option value="1kanal">1 Kanal</option>
        </select>
        <label htmlFor="pricerange" className="text-black">Price Range</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1   border-gray-300 p-2 ">
          <option value="5marla">30M</option>
          <option value="10marla">50M</option>
          <option value="15marla">70M</option>
          <option value="1kanal">100M</option>
        </select>
        <button className="text-white bg-gray-700 hover:bg-black hover:text-white px-4 py-1 rounded">Search</button>
      </div>

      {/* Gallery */}
      <section className="text-gray-700 md:mt-[25vh] mt-[80vh] body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.feeta.pk/uploads/mobile_images/2021-12-06-05-49-20-2424-1638769760_960x540_91.webp"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.feeta.pk/uploads/mobile_images/2021-12-06-08-13-06-8989-1638778386_960x499.2_91.webp"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://www.dhagwa.com/Content/Images/DHA%20Office%20Complex.jpeg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i0.wp.com/eproperty.pk/wp-content/uploads/2020/03/DHA-Gujranwala-Main-Gate.jpg?resize=500%2C282&ssl=1"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://content-cdn.zameen.com/Enem_Holdings_DHA_Gujranwala_About_projects_8974ee4a01.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.dhagwa.com/Content/Images/Villas.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      {/* contact from */}
      <Contactform/>
      {/* contact from */}

    </main>



    {/* Scroll to top button */}
    {showButton && (
      <div
        onClick={scrollToTop}
        className='fixed bottom-2 right-2 z-50 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg'
      >
        <span className="text-white bg-black"><FaArrowUp /></span>
      </div>)
    }
    {/* Search categories of homes */}
    {showMobileDiv && (
      <div className='z-10 fixed bottom-0 left-0 w-full flex justify-around py-4 md:hidden bg-white'>
        <button onClick={toggleSearchDiv} className='bg-white text-black border border-black px-4 py-2'>
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
        <button className="bg-blue-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded">Search</button>

      </div>
    )}
  </>
  );
}
