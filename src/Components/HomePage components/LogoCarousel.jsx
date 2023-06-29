import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarousel.css";

// import Logo1 from "../../Assets/logos/3m.svg";
// import Logo2 from "../../Assets/logos/barstool-store.svg";
// import Logo3 from "../../Assets/logos/budweiser.svg";
// import Logo4 from "../../Assets/logos/forbes.svg";
// import Logo5 from "../../Assets/logos/macys.svg";
// import Logo6 from "../../Assets/logos/menshealth.svg";
// import Logo7 from "../../Assets/logos/mrbeast.svg";

const LogoCarousel = () => {
  const logos = [
    { id: 1, src: require("../../Assets/logos/3m.svg").default, alt: "Logo 1" },
    {
      id: 2,
      src: require("../../Assets/logos/barstool-store.svg").default,
      alt: "Logo 2",
    },
    {
      id: 3,
      src: require("../../Assets/logos/budweiser.svg").default,
      alt: "Logo 3",
    },
    {
      id: 4,
      src: require("../../Assets/logos/buzzfeed.svg").default,
      alt: "Logo 4",
    },
    {
      id: 5,
      src: require("../../Assets/logos/forbes.svg").default,
      alt: "Logo 5",
    },
    {
      id: 6,
      src: require("../../Assets/logos/macys.svg").default,
      alt: "Logo 6",
    },
    {
      id: 7,
      src: require("../../Assets/logos/mrbeast.svg").default,
      alt: "Logo 6",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='logo-carousel-container'>
      <div className='logo-carousel-title'>
        <h1>Clients</h1>
        <div className='underline'></div>
      </div>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className='logo-slide'>
            <img className='logo-image' src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
