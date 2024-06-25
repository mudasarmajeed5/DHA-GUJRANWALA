import React from 'react'

const Gallery = () => {
  return (
    <section className="text-gray-700  body-font">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">Media Gallery</h1>
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
  )
}

export default Gallery