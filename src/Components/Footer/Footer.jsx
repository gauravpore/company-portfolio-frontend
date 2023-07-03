import React from "react";
import {
  FaInfoCircle,
  FaPhone,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='section'>
          <h3>
            <FaInfoCircle className='icon' /> About Us
          </h3>
          <div className='underline'></div>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            At Samadhan group, we are dedicated to serving our customers with
            products that embody Excellence and Economy. Our team is driven by
            the ethos of doing the 'RIGHT THING FIRST TIME AND EVERY TIME,'
            fostering a spirit of teamwork and motivation among our employees.
          </p>
        </div>
        <div className='section'>
          <h3>
            <FaPhone className='icon' /> Get in Touch
          </h3>
          <div className='underline'></div>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            <FaMapMarkerAlt className='icon' /> Nilkanth Ind. Estate, Survey No.
            86, Plot No. 3, Village-Dhamni, Tal-Khalapur, Dist- Raigad,
            Maharashtra. 410206
            <br />
            <br />
            <FaPhone className='icon' /> +91 9432648285
            <br />
            <br />
            <FaEnvelope className='icon' /> samadhantincontainers@gmail.com
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
      <div className='social-icons'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillFacebook className='icon' />
        </a>
        <a
          href='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin className='icon' />
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiOutlineTwitter className='icon' />
        </a>
        <a
          href='https://www.google.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillGooglePlusCircle className='icon' />
        </a>
      </div>
      <div className='footer-text'>
        &copy; {new Date().getFullYear()} Samadhan group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
