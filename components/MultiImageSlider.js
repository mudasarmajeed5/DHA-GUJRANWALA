import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ heading, paragraph, buttonText, imageSrc }) => {
  return (
    <div className="max-w-sm mx-2 rounded-lg ">
      <a href="#">
        <div className="overflow-hidden">
          <img
            className="hover:scale-105 transition-transform duration-1000"
            src={imageSrc}
            alt=""
          />
        </div>
      </a>
      <div className="p-5 text-center">
        <a href="#">
          <h5 className=" text-xl font-bold tracking-tight text-gray-900">
            {heading}
          </h5>
        </a>
        <p className="font-normal mb-2 text-gray-700 text-sm">
          {paragraph}
        </p>
        <a
          href="#"
          className=" bg-gray-200 text-black hover:bg-gray-300 transition-all duration-200 px-2 py-1 rounded-sm"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const cardsData = [
  {
    heading: "Tech Acquisitions",
    paragraph: "Biggest enterprise technology acquisitions of 2021.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2024/06/THE-HEIGHT-_320X415.jpeg"
  },
  {
    heading: "Innovation in AI",
    paragraph: "AI is transforming industries globally.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2024/05/Community-Featured-Image-portrait-320x415.jpg"
  },
  {
    heading: "Future of Work",
    paragraph: "Remote work is the new normal for many.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2023/06/OASIS_320-x-415-320x415-1-320x415.jpg.webp"
  },
  {
    heading: "Healthcare Advances",
    paragraph: "Technology is revolutionizing healthcare.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2021/08/DUBAI_MARINA_COMMUNITY-320x415.jpg"
  },
  {
    heading: "Renewable Energy",
    paragraph: "Solar and wind energy are on the rise.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2021/08/DHE_COMMUNITY_HERO-resize-scaled-1-320x415.jpeg"
  },
  {
    heading: "Space Exploration",
    paragraph: "New missions to Mars and beyond.",
    buttonText: "View Details",
    imageSrc: "https://www-emaar-com.azureedge.net/wp-content/uploads/2021/08/DUBAI_CREEK_HARBOUR_HERO-320x415.jpg"
  }
];


const MultiImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider className='w-4/5 py-5 mx-auto' {...settings}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          heading={card.heading}
          paragraph={card.paragraph}
          buttonText={card.buttonText}
          imageSrc={card.imageSrc}
        />
      ))}
    </Slider>
  );
};

export default MultiImageSlider;
