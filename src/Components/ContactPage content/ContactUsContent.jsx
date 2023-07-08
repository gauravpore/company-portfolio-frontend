import React from "react";
import "./ContactUsContent.css";

const ContactUsContent = () => {
  return (
    <div
      className='contact-us-container'
      style={{
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <div className='contact-us-details'>
        <h1>Contact Us</h1>
        <div className='underline'></div>
        <br />
        <br />
        <p>
          Phone: <span>+91 9432648285</span>
        </p>
        <br />
        <p>
          Email: <span>samadhantincontainers@gmail.com</span>
        </p>
        <br />
        <p>
          Address:{" "}
          <span>
            Nilkanth Ind. Estate, Survey No. 86, Plot No. 3, Village-Dhamni,
            Tal-Khalapur, Dist- Raigad, Maharashtra. 410206
          </span>
        </p>
      </div>
      <iframe
        title='maps'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.266501825758!2d73.28117567231115!3d18.83081454325813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fd30da2ddf55%3A0x7b4e5afa5dd05b51!2sKhalapur%20Police%20Station!5e0!3m2!1sen!2sin!4v1688359366385!5m2!1sen!2sin'
        width='550'
        height='400'
        style={{ border: "0" }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default ContactUsContent;
