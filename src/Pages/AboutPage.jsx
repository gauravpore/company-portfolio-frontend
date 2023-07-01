import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import AboutImage from "../Assets/AboutUsImage.jpg";
import Title from "../Components/UI components/TitleComponent";
import AboutContent from "../Components/AboutPage content/AboutContent";
const AboutPage = () => {
  return (
    <div>
      <HeroImage imageUrl={AboutImage}>
        <Title text={"About us"} />
      </HeroImage>
      <AboutContent />
    </div>
  );
};

export default AboutPage;
