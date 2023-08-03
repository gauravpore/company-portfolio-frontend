import React from "react";
import "./HomeContent.css";

// logo carusal
import LogoCarousel from "./LogoCarousel";

import macro from "../../Assets/macro.jpg";
import people from "../../Assets/people.jpg";
import electrician from "../../Assets/electrician.jpg";

const cards = [
  {
    title: "Supplying Quality Products",
    description:
      "Our primary objective is to consistently supply our customers with high-quality products that meet or exceed their expectations. We strive to ensure that every product leaving our facilities adheres to rigorous quality standards, delivering value and satisfaction to our customers.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We are committed to continuously improving all our operations in order to enhance customer satisfaction. By analyzing our processes, identifying areas for improvement, and implementing effective solutions, we aim to optimize our efficiency, quality, and overall performance.",
  },
  {
    title: "Employee Training and Development",
    description:
      "We recognize the importance of employee development in achieving excellence. We invest in training programs that equip our employees with the necessary skills and knowledge for continuous improvement. By fostering a learning culture, we empower our workforce to contribute their best to our quality objectives.",
  },
  {
    title: "Sound Management System",
    description:
      "We strive to implement a robust management system that supports and drives our quality objectives. By establishing clear processes, setting performance metrics, and monitoring key indicators, we ensure that our operations are aligned with our quality policy and objectives.",
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
            data-aos-once='true'
          >
            <img src={macro} alt='marco' className='marco' />

            <img src={people} alt='people' />
            <img src={electrician} alt='people' />
          </div>
          <div className='home-whyChooseUs-right'>
            {cards.map((item, index) => (
              <div
                className='whyChooseUs-content'
                data-aos='fade-left'
                data-aos-offset='200'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='true'
                key={index}
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
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
