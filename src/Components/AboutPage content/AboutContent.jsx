import React from "react";
import "./AboutContent.css";
import Image from "../../Assets/IndustryImage.jpg";
import QualityCards from "./QualityCards";

const AboutContent = () => {
  return (
    <div className='about-container'>
      <div className='aboutus-section'>
        <div
          className='inner-container'
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <h1>About Us</h1>
          <div className='underline'></div>
          <p className='text'>
            At Samadhan Group, we are dedicated to serving our customers with
            products that embody Excellence and Economy. Our team is driven by
            the ethos of doing the 'RIGHT THING FIRST TIME AND EVERY TIME,'
            fostering a spirit of teamwork and motivation among our employees.
            Innovation is at the core of our inspiration, both in technology and
            in our thought process. In addition to meeting the present needs of
            our customers, we conduct meticulous research and development to
            anticipate future requirements. We are eager to establish new units
            and plants across India, driven by the trust and belief our
            customers have in us, ensuring a promising future. Our sincere
            endeavor is to provide our clients with cost-effective packaging
            solutions that integrate aesthetics, trends, and creativity. We aim
            to deliver packaging that not only fulfills its functional purpose
            but also communicates the brand message effectively. With a
            relentless focus on excellence, innovation, and customer
            satisfaction, we strive to be the preferred partner for all your
            packaging needs.
          </p>
        </div>
      </div>
      <div className='vision-section'>
        <div
          className='vision-content'
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='true'
        >
          <h1>Vision : Pioneering Excellence in Packaging Solutions</h1>
          <br />
          <div className='underline'></div>
          <br />
          <p>
            Our vision at Samadhan group is to become one of India's leading
            manufacturers of tin packaging products. We aspire to be recognized
            as a trusted and preferred choice for businesses seeking
            high-quality, innovative, and sustainable tin packaging solutions.
            Through our commitment to excellence, customer satisfaction, and
            continuous growth, we aim to contribute to the success and growth of
            our customers while making a positive impact on the packaging
            industry.
          </p>
        </div>
        <div
          className='vision-image'
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='true'
        >
          <img src={Image} alt='' />
        </div>
      </div>
      <div
        className='Quality-section'
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Quality Objectives</h1> <br />
        <div className='underline'></div> <br />
        <QualityCards />
      </div>
    </div>
  );
};

export default AboutContent;
