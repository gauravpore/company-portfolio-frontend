import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import ContactUsImage from "../Assets/ContactUsImage.jpg";
import Title from "../Components/UI components/TitleComponent";
import ContactUsContent from "../Components/ContactPage content/ContactUsContent";

const ContactPage = () => {
  return (
    <div>
      <HeroImage imageUrl={ContactUsImage}>
        <Title text={"Contact Us"} />
      </HeroImage>
      <ContactUsContent />
    </div>
  );
};

export default ContactPage;
