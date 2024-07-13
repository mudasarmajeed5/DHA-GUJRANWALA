import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
      <div className="flex flex-wrap py-8">
        <div className="w-full md:w-1/4 bg-secondary text-secondary-foreground flex flex-col justify-around">
          <div className="bg-[#2F534F] h-full text-white p-4">
            <img aria-hidden="true" alt="star-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⭐" className="mb-2 w-8 h-8" />
            <h2 className="text-lg font-bold">Handling</h2>
            <p className="text-muted-foreground"> Efficient management and upkeep.</p>
          </div>
          <div className="bg-[#F1F1F1] h-full p-4 text-black">
            <img aria-hidden="true" alt="clock-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⏰" className="mb-2 w-8 h-8" />
            <h2 className="text-lg font-bold">Time</h2>
            <p className="text-muted-foreground">Timely completion of projects</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src="https://img.freepik.com/free-photo/side-view-people-working-as-real-estate-agents_23-2151064803.jpg" alt="A person with artistic face paint" className="w-full object-center h-full object-cover" />
        </div>

        <div className="w-full md:w-1/4 flex flex-col">
          <div className="text-black md:pl-[20%] md:pr-3 p-4 flex-1 bg-[#F1F1F1]">
            <h2 className="text-2xl text-left md:text-right font-bold">WHY CHOOSE US?</h2>
            <p className="text-muted-foreground text-left md:text-right">Everyday we work hard to make life of our clients better and happier.</p>
          </div>
          <div className="bg-[#28756B] text-white text-secondary-foreground p-4 flex-1">
            <img aria-hidden="true" alt="calendar-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📅" className="mb-2 w-8 h-8" />
            <h2 className="text-lg font-bold">Events</h2>
            <p className="text-muted-foreground">Community-centric events</p>
          </div>
          <div className="bg-black text-white p-4 flex-1">
            <img aria-hidden="true" alt="gear-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⚙️" className="mb-2 w-8 h-8" />
            <h2 className="text-lg font-bold">Ratings/User Reviews</h2>
            <p className="text-muted-foreground">High customer satisfaction</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default WhyChooseUs