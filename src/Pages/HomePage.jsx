import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import HeroPageImage from "../Assets/HomePageImage.jpg";

import HomePageTitle from "../Components/HomePage components/HomePageTitle";

import HomeContent from "../Components/HomePage components/HomeContent";
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
