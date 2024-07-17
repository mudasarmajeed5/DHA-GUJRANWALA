'use client'
import { useState, useEffect } from "react";
import Contactform from "@/components/Contactform";
import Carousel from "@/components/Carousel";
import DownloadApp from "@/components/DownloadApp";
import MultiImageSlider from "@/components/MultiImageSlider";
import InterestCaculator from "@/components/AdditionalComponents/InterestCaculator";
import FAQs from "@/components/AdditionalComponents/FAQs";
import UpcomingEvents from "@/components/AdditionalComponents/UpcomingEvents";
import CreateAccount from "@/components/AdditionalComponents/CreateAccount";
// import WhyChooseUs from "@/components/AdditionalComponents/WhyChooseUs";
import { FaEarthAsia } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const [showMobileDiv, setShowMobileDiv] = useState(false);
  const [showSearchDiv, setShowSearchDiv] = useState(false);
  const [showmore, setShowmore] = useState(false);
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
      if (window.scrollY > 200) {
        setShowButton(true);
        setShowMobileDiv(true);
      } else {
        setShowButton(false);
        setShowMobileDiv(false);
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
  const toggleSearchDiv = () => {
    setShowSearchDiv(!showSearchDiv);
  };
  const toggleshowmore = () => {
    setShowmore(!showmore)
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
    <marquee behavior="" direction="horizontal" className='text-white bg-[--secondary-button]'>DHA Gujranwala has introduced 2 marla commercial plots for sale in developed sectors. For more information, please contact the sales office. Thank you.</marquee>
    
    <Carousel />
    <div className="border bg-white"></div>
    <main className="min-h-screen relative">
      <div className="hidden rounded-full mt-[-13vh] md:flex max-w-fit flex-row gap-4 py-2 bg-white mx-auto w-60vw justify-start px-8 items-center">
        <label htmlFor="propertyType" className="text-black">Property Type</label>
        <select id="propertyType" name="propertx`yType" className="border rounded-md py-1 hover:bg-[--secondary-button]  border-gray-300 p-2">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <label htmlFor="propertySize" className="text-black">Property Size</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1 hover:bg-[--secondary-button]  border-gray-300 p-2 ">
          <option value="5marla">5 Marla</option>
          <option value="10marla">10 Marla</option>
          <option value="15marla">15 Marla</option>
          <option value="1kanal">1 Kanal</option>
        </select>
        <label htmlFor="pricerange" className="text-black">Price Range</label>
        <select id="propertySize" name="propertySize" className="border rounded-md py-1 hover:bg-[--secondary-button] border-gray-300 p-2 ">
          <option value="5marla">30M</option>
          <option value="10marla">50M</option>
          <option value="15marla">70M</option>
          <option value="1kanal">100M</option>
        </select>
        <button className="text-white bg-white px-2 py-1 hover:bg-[--secondary-button] rounded flex gap-1 items-center">
          <span className="text-black">Search</span>
          <lord-icon
            src="https://cdn.lordicon.com/kkvxgpti.json"
            trigger="hover"
            style={{ width: "20px", height: "20px" }}
          ></lord-icon>
        </button>
      </div>

      <div className="py-2 md:mt-[20vh] text-[--secondary-button]">
        <div className="w-1/2 my-2 mx-auto md:text-left text-center md:mx-16">
          <p className="text-3xl my-5 md:text-left text-center underline font-bold">COMMUNITIES</p>
          <h1 className="md:text-2xl md:text-left text-center font-bold text-xl">
            FEATURED COMMUNITIES</h1></div>
        <MultiImageSlider />
      </div>
      {/* <Gallery/> */}
      <UpcomingEvents />
      {/* <WhyChooseUs /> */}
      {/* <div className="bg-gray-700 border mt-10 mb-5"></div> */}
      <CreateAccount />
      <DownloadApp />

      <InterestCaculator />
      <FAQs />
      {/* contact from */}

    </main>



    {/* Scroll to top button */}
    {showButton && (
      <div
        onClick={scrollToTop}
        className='fixed bottom-1 md:bottom-2 left-2 z-50 cursor-pointer'
      >
        <span><lord-icon
          src="https://cdn.lordicon.com/dwoxxgps.json"
          trigger="hover"
          style={{ width: "45px", height: "45px", }}
        ></lord-icon></span>
      </div>)
    }
    {/* Search categories of homes */}
    {showMobileDiv && (
      <div className='z-20 fixed bottom-0 text-sm left-0 w-full flex justify-center gap-1 py-2 md:hidden bg-[--secondary-button]'>
        <button onClick={toggleSearchDiv} className='rounded-full border-2 text-[--text-color] border-black px-2 py-1'>
          {showSearchDiv ? 'Close menu' : 'Explore categories'}
        </button>

        <button onClick={toggleshowmore} className='text-[--text-color] rounded-full border-2 border-black px-2 py-1'>
        {showmore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    )}
    {showSearchDiv && (
      <div
        className='fixed top-0 left-0 flex justify-center items-center flex-col w-screen h-screen bg-gray-800 gap-4 text-white z-10 transition-all duration-500'
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
        <select id="propertySize" name="propertySize" className="border rounded-md py-1 hover:bg-[--secondary-button] bg-black p-2 ">
          <option value="5marla">30M</option>
          <option value="10marla">50M</option>
          <option value="15marla">70M</option>
          <option value="1kanal">100M</option>
        </select>
        <button className="bg-blue-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded">Search</button>

      </div>
    )}{showmore && (
      <div
        className='fixed top-0 left-0 flex justify-center items-center flex-col w-screen h-screen bg-gray-800 gap-4 text-white z-10 transition-all duration-500'
        // onClick={() => { toggleSearchDiv(); }}
      >
       <div className="contact ml-[-5%] flex flex-col gap-5">
        <button className="rounded-full text-lg px-4 py-2 border-2 border-[--secondary-button] hover:bg-[--secondary-button] hover:text-white transition-all duration-300 flex gap-1 justify-center items-center"><span><IoCallSharp /></span><span>Sales Office</span></button>
        <button className="rounded-full text-lg px-4 flex justify-center items-center hover:bg-[--secondary-button] hover:text-white transition-all duration-300 py-2 border-2 border-[--secondary-button] overseasportal"><span className="rotate-90"><FaEarthAsia /></span><span>verseas Portal</span></button>
        <button className="rounded-full text-lg px-4 flex justify-center items-center text-[--text-color] transition-all duration-300 py-2 hover:text-white border-2 border-[--secondary-button] hover:bg-[--secondary-button]">Become JV Partner</button>
      </div>

      </div>
    )}
    <span className="fixed md:bottom-4 bottom-4 text-red-950 text-2xl bg-[--secondary-button] z-20 border-2 rounded-full right-3"><button
      onClick={toggleDarkMode}
      className="p-2"
    >
      {darkMode ? <CgDarkMode /> : <MdLightMode />
      }
    </button></span>

    <Contactform />

  </>
  );
}
