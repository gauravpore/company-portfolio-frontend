import React from "react";
import HeroImage from "../Components/HeroImage";
import AboutImage from "../Assets/AboutUsImage.jpg";

const AboutPage = () => {
  return (
    <div>
      <HeroImage imageUrl={AboutImage} />
    </div>
  );
};

export default AboutPage;
