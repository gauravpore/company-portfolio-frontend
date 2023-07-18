import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

import "./Footer.css";

const Footer = () => {
  const getIntouchContent = [
    {
      icon: <IoLocationOutline className='icon' />,
      text: (
        <>
          Nilkanth Ind. Estate, Survey No. 86, Plot No. 3, Village-Dhamni,
          Tal-Khalapur, Dist- Raigad, Maharashtra. 410206
        </>
      ),
    },
    {
      icon: <IoCallOutline className='icon' />,
      text: "+91 9432648285",
    },
    {
      icon: <IoMailOutline className='icon' />,
      text: "samadhantincontainers@gmail.com",
    },
  ];

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='section'>
          <h3>Get in Touch</h3>
          <div className='underline'></div>
          <div className='section-wrapper'>
            {getIntouchContent.map((item, index) => (
              <div className='getIntouch-content' key={index}>
                <div className='icon'>{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
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
