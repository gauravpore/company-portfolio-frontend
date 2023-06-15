import React from "react";
import {
  FaInfoCircle,
  FaPhone,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='section'>
          <h3>
            <FaInfoCircle className='icon' /> About Us
          </h3>
          <div className='underline'></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            gravida augue id semper consequat. Aliquam erat volutpat. In hac
            habitasse platea dictumst.
          </p>
        </div>
        <div className='section'>
          <h3>
            <FaPhone className='icon' /> Get in Touch
          </h3>
          <div className='underline'></div>
          <p>
            <FaMapMarkerAlt className='icon' /> 123 Street, City Name, Country
            <br />
            <FaPhone className='icon' /> +1 234 567 890
            <br />
            <FaEnvelope className='icon' /> example@email.com
          </p>
        </div>
        <div className='section'>
          <h3>
            <FaClock className='icon' /> Opening Hours
          </h3>
          <div className='underline'></div>
          <p>
            Monday - Friday: 9am - 6pm
            <br />
            Saturday: 10am - 4pm
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
