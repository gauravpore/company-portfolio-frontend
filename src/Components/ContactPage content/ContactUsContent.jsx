import React from "react";
import "./ContactUsContent.css";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";

const ContactUsContent = () => {
  return (
    <div
      className="contact-us-container"
      style={{
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <div className="contact-us-details">
        <h1>Contact Us</h1>
        <div className="underline"></div>
        <br />
        <br />
        <div className="contact-details">
          <p>
            <FaMapPin className="icon" />
            &nbsp;&nbsp;
            <span>
              Nilkanth Ind. Estate, Survey No. 86, Plot No. 3, Village-Dhamni,
              Tal-Khalapur, Dist- Raigad, Maharashtra. 410206
            </span>
          </p>
          <br />
          <p>
            <FaPhone className="icon" />
            &nbsp;&nbsp;
            <span>+91 9432648285</span>
          </p>
          <br />
          <p>
            <FaEnvelope className="icon" />
            &nbsp;&nbsp;
            <span>samadhantincontainers@gmail.com</span>
          </p>
          <br />
        </div>
      </div>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3776.571572813592!2d73.2761950744451!3d18.817236982334695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ5JzAyLjEiTiA3M8KwMTYnNDMuNiJF!5e0!3m2!1sen!2sin!4v1688914981635!5m2!1sen!2sin"
        width="550"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUsContent;
