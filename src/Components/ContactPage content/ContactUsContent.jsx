import React from "react";
import "./ContactUsContent.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const ContactUsContent = () => {
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
    <div className='contact-us-container'>
      <h1>Contact Us</h1>
      <br />
      <div className='underline'></div>
      <div className='contact-details-container'>
        <div className='contact-details'>
          {getIntouchContent.map((item, index) => (
            <div className='getIntouch-content' key={index}>
              <div className='icon'>{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className='map-container'>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3776.571572813592!2d73.2761950744451!3d18.817236982334695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ5JzAyLjEiTiA3M8KwMTYnNDMuNiJF!5e0!3m2!1sen!2sin!4v1688914981635!5m2!1sen!2sin'
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
