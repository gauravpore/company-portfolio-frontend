import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import AboutImage from "../Assets/AboutUsImage.jpg";
import Title from "../Components/UI components/TitleComponent";

import LogoCarousel from "../Components/HomePage components/LogoCarousel";

const AboutPage = () => {
  return (
    <div>
      <HeroImage imageUrl={AboutImage}>
        <Title text={"About us"} />
      </HeroImage>
      <LogoCarousel />
    </div>
  );
};

export default AboutPage;
