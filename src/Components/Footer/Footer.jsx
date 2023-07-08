import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='section'>
          <h3>
            <FaPhone className='icon-section' /> Get in Touch
          </h3>
          <div className='underline'></div>
          <div className='section-wrapper'>
            <div className='getIntouch-content'>
              <FaMapMarkerAlt className='icon' />
              <p>
                Nilkanth Ind. Estate, Survey No. 86, Plot No. 3, Village-Dhamni,
                Tal-Khalapur, Dist- Raigad, Maharashtra. 410206
              </p>
            </div>
            <div className='getIntouch-content'>
              <FaPhone className='icon' />
              <p>+91 9432648285</p>
            </div>
            <div className='getIntouch-content'>
              <FaEnvelope className='icon' />
              <p>samadhantincontainers@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='footer-text'>
          &copy; {new Date().getFullYear()} Samadhan group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
