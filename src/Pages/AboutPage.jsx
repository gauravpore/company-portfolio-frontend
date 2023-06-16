import React from "react";
import HeroImage from "../Components/HeroImage";
import AboutImage from "../Assets/AboutUsImage.jpg";
import Title from "../Components/TitleComponent";

const AboutPage = () => {
  return (
    <div>
      <HeroImage imageUrl={AboutImage}>
        <Title text={"About us"} />
      </HeroImage>
    </div>
  );
};

export default AboutPage;
