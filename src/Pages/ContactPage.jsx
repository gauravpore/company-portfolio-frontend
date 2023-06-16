import React from "react";
import HeroImage from "../Components/HeroImage";
import ContactUsImage from "../Assets/ContactUsImage.jpg";
import Title from "../Components/TitleComponent";
const ContactPage = () => {
  return (
    <div>
      <HeroImage imageUrl={ContactUsImage}>
        <Title text={"Contact Us"} />
      </HeroImage>
    </div>
  );
};

export default ContactPage;
