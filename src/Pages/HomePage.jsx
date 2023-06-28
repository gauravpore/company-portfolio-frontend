import React from "react";
import HeroImage from "../Components/HeroImage";
import HeroPageImage from "../Assets/HomePageImage.jpg";

import HomePageTitle from "../Components/HomePageTitle";

import HomeContent from "../Components/HomeContent";
const HomePage = () => {
  return (
    <div>
      <HeroImage imageUrl={HeroPageImage}>
        <HomePageTitle />
      </HeroImage>
      <HomeContent />
    </div>
  );
};

export default HomePage;
