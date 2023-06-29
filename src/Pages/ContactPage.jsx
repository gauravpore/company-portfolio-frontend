import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import ContactUsImage from "../Assets/ContactUsImage.jpg";
import Title from "../Components/UI components/TitleComponent";
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
