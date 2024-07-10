import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
const UpcomingEvents = () => {
  return (
    <>

      <div className='my-6 border'></div>
      <div className="p-6 bg-background text-foreground">
        <h2 className="text-3xl font-semibold mb-4 text-green-500">Upcoming Events</h2>
        <div className="flex items-start justify-start flex-wrap gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-input border border-border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <img
              aria-hidden="true"
              alt="search-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <button className="justify-center gap-1 border text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-secondary/80">
            <span>Date</span>
            <span><FaArrowDown /></span>
          </button>
          <button className="justify-center gap-1 border text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-secondary/80">
            <span>Event type</span>
            <span><FaArrowDown /></span>
          </button>
          <button className="justify-center gap-1 border text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-secondary/80">
            <span>Location</span>
            <span><FaArrowDown /></span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-4 rounded-lg shadow-md">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA="
                alt="Event 1 image"
                className="rounded-t-lg"
              />
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                Featured
              </span>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground mb-1">Dec 5 - Dec 8, 2024</p>
              <h3 className="text-lg font-bold mb-2 text-green-500">
                ARY LAGUNA
              </h3>
              <button className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground text-sm">
                Register Now
              </button>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-md">
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
                alt="Event 2 image"
                className="rounded-t-lg"
              />
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                Featured
              </span>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground mb-1">
                November 3 - November 7, 2024
              </p>
              <h3 className="text-lg font-bold mb-2 text-green-500">
                INGURATION OF Gate 2
              </h3>
              <button className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground text-sm">
                Register Now
              </button>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-md">
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/blurry-abstract-night-music-festival-background-with-people-bright-night-bokeh-night-music-community-event-with-people_87555-16380.jpg"
                alt="Event 3 image"
                className="rounded-t-lg"
              />
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                Featured
              </span>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground mb-1">
                November 17 - November 21, 2024
              </p>
              <h3 className="text-lg font-bold mb-2 text-green-500">
                MUSICAL NIGHT
              </h3>
              <button className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground text-sm">
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