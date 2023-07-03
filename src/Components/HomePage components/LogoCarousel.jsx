import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarousel.css";

import HPAdhesivesLogo from "../../Assets/logos/HP_adhesives.png";
import NerolacLogo from "../../Assets/logos/NEROLAC-LOGO.png";
import FirstChemLogo from "../../Assets/logos/first_chem.png";
import PPGAsianPaintsLogo from "../../Assets/logos/ppg_asian_paints.png";
import UCILLogo from "../../Assets/logos/ucil.png";

const LogoCarousel = () => {
  const logos = [
    {
      id: 1,
      src: HPAdhesivesLogo,
      alt: "HP Adhesives",
    },
    {
      id: 2,
      src: NerolacLogo,
      alt: "Nerolac",
    },
    {
      id: 3,
      src: FirstChemLogo,
      alt: "First Chem",
    },
    {
      id: 4,
      src: PPGAsianPaintsLogo,
      alt: "PPG Asian Paints",
    },
    {
      id: 5,
      src: UCILLogo,
      alt: "UCIL",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Adjust the breakpoint as per your requirements
        settings: {
          slidesToShow: 3, // Show 3 slides on screens with width less than 992px
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as per your requirements
        settings: {
          slidesToShow: 2, // Show 2 slides on screens with width less than 768px
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as per your requirements
        settings: {
          slidesToShow: 1, // Show 1 slide on screens with width less than 480px
        },
      },
    ],
  };

  return (
    <div className='logo-carousel-container'>
      <div className='logo-carousel-title'>
        <h1>Our Clients</h1>
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
