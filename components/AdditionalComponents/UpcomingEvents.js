import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
const UpcomingEvents = () => {
  return (
    <>

      <div className='mt-6 border'></div>
      <div className="text-foreground">
       

        <div className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden">
        <div className="top-0 py-10 2xl:py-20 lg:py-10">
           <h2 className="2x:text-4xl text-2xl text-[--secondary-button] text-center font-bold mb-4 uppercase">Upcoming Events</h2>
          <div className="flex items-center text-sm justify-center flex-wrap gap-4 mb-2 md:mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-input border border-[--secondary-button] rounded-full py-2 px-4 pl-10 bg-transparent text-white"
              />
              <img
                aria-hidden="true"
                alt="search-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <button className="justify-center gap-1 border text-sm border-[--secondary-button] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:border-[--secondary-button]/80">
              <span>Date</span>
              <span><FaArrowDown /></span>
            </button>
            <button className="justify-center gap-1 border text-sm border-[--secondary-button] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:border-[--secondary-button]/80">
              <span>Event type</span>
              <span><FaArrowDown /></span>
            </button>
            <button className="justify-center gap-1 border text-sm border-[--secondary-button] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:border-[--secondary-button]/80">
              <span>Location</span>
              <span><FaArrowDown /></span>
            </button>
          </div>
        </div>
        <div className="absolute top-0 z-[-10] w-full h-full"><video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover object-center"
            src="/EventVideo.mp4"
          ></video></div>
        </div>
        <div className='md:mb-16 mb-6 border'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="bg-card p-4 rounded-lg">
            <div className="relative md:p-0 pt-5">
              <img
                src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA="
                alt="Event 1 image"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-[--text-color] mb-1">Dec 5 - Dec 8, 2024</p>
              <h3 className="text-lg font-bold mb-2 text-[--secondary-button]">
                ARY LAGUNA
              </h3>
              <button className="bg-transparent border border-[--secondary-button] text-[--primary-button] px-4 py-2 rounded-full hover:bg-primary hover:text-[--text-color] text-sm">
                Register Now
              </button>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
                alt="Event 2 image"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-[--text-color] mb-1">
                November 3 - November 7, 2024
              </p>
              <h3 className="text-lg font-bold mb-2 text-[--secondary-button]">
                INGURATION OF GATE 2
              </h3>
              <button className="bg-transparent border border-[--secondary-button] text-[--primary-button] px-4 py-2 rounded-full hover:bg-primary hover:text-[--text-color] text-sm">
                Register Now
              </button>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/blurry-abstract-night-music-festival-background-with-people-bright-night-bokeh-night-music-community-event-with-people_87555-16380.jpg"
                alt="Event 3 image"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-[--text-color] mb-1">
                November 17 - November 21, 2024
              </p>
              <h3 className="text-lg font-bold mb-2 text-[--secondary-button]">
                MUSICAL NIGHT
              </h3>
              <button className="bg-transparent border border-[--secondary-button] text-[--primary-button] px-4 py-2 rounded-full hover:bg-primary hover:text-[--text-color] text-sm">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='border'></div>
    </>
  )
}

export default UpcomingEvents