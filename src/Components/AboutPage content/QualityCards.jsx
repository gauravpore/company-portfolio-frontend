import React from "react";
import "./QualityCards.css";

const qualityData = [
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
    title: "Sound Management System",
    description:
      "We strive to implement a robust management system that supports and drives our quality objectives. By establishing clear processes, setting performance metrics, and monitoring key indicators, we ensure that our operations are aligned with our quality policy and objectives.",
  },
];

const QualityCards = () => {
  return (
    <div className='quality-cards-container'>
      {qualityData.map((item, index) => (
        <div
          className='quality-card'
          key={index}
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <h2 className='quality-card-title'>{item.title}</h2>
          <div className='underline'></div>
          <p className='quality-card-description'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QualityCards;
