import React from "react";
import "./HomeContent.css";
import { TiTime } from "react-icons/ti";
import { GiCutDiamond } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";

// logo carusal
import LogoCarousel from "./LogoCarousel";

import macro from "../../Assets/macro.jpg";
import people from "../../Assets/people.jpg";
import electrician from "../../Assets/electrician.jpg";

const data = [
  {
    icon: <FaThumbsUp />,
    heading: "RELIABILITY",
    content:
      "Our company is renowned for its unwavering reliability in the adhesive industry, consistently delivering on-time solutions that exceed customer expectations.",
  },
  {
    icon: <TiTime />,
    heading: "EXPERTISE",
    content:
      "Our knowledgeable team delivers tailored adhesive solutions, staying at the forefront of industry advancements.",
  },
  {
    icon: <GiCutDiamond />,
    heading: "QUALITY",
    content:
      "Our rigorous quality control measures ensure superior adhesive performance, durability, and safety, earning the trust of our clients.",
  },
];

const HomeContent = () => {
  return (
    <div className='Content-container'>
      <div className='Home-Container'>
        <div className='Home-title'>
          <h1>Why Choose us?</h1>
          <div className='underline'></div>
        </div>
        <div className='home-whyChooseUs'>
          <div
            className='image-container'
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <img src={macro} alt='marco' className='marco' />

            <img src={people} alt='people' />
            <img src={electrician} alt='people' />
          </div>
          <div className='home-whyChooseUs-right'>
            {data.map((item, index) => (
              <div
                className='whyChooseUs-content'
                data-aos='fade-left'
                data-aos-offset='200'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='false'
                key={index}
              >
                <div className='icon'>{item.icon}</div>
                <div className=''>
                  <h2>{item.heading}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LogoCarousel />
      </div>
    </div>
  );
};

export default HomeContent;
