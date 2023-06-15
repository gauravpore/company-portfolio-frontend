import React from "react";
import HeroImage from "../Components/HeroImage";
import HeroPageImage from "../Assets/HomePageImage.jpg";

const HomePage = () => {
  return (
    <div>
      <HeroImage imageUrl={HeroPageImage}></HeroImage>
    </div>
  );
};

export default HomePage;
