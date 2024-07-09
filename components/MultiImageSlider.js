import Slider from "react-slick";
const Card = ({ heading, paragraph, buttonText, imageSrc }) => {
  return (
    <div className="min-w-sm mx-2 rounded-lg">
      <a href="#">
        <div className="overflow-hidden">
          <img
            className="hover:scale-105 mx-auto h-[330px] md:w-[260px] w-full object-cover object-center transition-transform duration-1000"
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
    heading: "Executive Block",
    paragraph: "Biggest enterprise technology acquisitions of 2024.",
    buttonText: "View Details",
    imageSrc: "/sliderimages/third image.jpg"
  },
  {
    heading: "Villas",
    paragraph: "Luxurious living spaces with modern amenities.",
    buttonText: "View Details",
    imageSrc: "/sliderimages/10 Marla Villas.jpg"
  },
  {
    heading: "Commercial Zone",
    paragraph: "Prime business locations for your enterprise.",
    buttonText: "View Details",
    imageSrc: "/sliderimages/Commercials.png"
  },
  {
    heading: "ARY Laguna",
    paragraph: "Exclusive waterfront community with stunning views.",
    buttonText: "View Details",
    imageSrc: "/sliderimages/ary-laguna.png"
  },
  {
    heading: "Education System",
    paragraph: "State-of-the-art facilities for academic excellence.",
    buttonText: "View Details",
    imageSrc: "/sliderimages/future-world-school.jpg"
  },
  {
    heading: "Medical Center",
    paragraph: "Advanced healthcare services for your well-being.",
    buttonText: "View Details",
    imageSrc: "https://media.istockphoto.com/id/1283128541/photo/hall-of-deep-hospital.jpg?s=612x612&w=0&k=20&c=GdvjMwj3Vr4h0aNa0svd-IBtZF-5UgLDOp7MSs8L0ZM="
  }
];



const MultiImageSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <Slider className='w-4/5 md:w-11/12 py-5 mx-auto' {...settings}>
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
