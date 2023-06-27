import React from "react";
import HeroImage from "../Components/HeroImage";
import HeroPageImage from "../Assets/HomePageImage.jpg";
import Title from "../Components/TitleComponent";

import HomeContent from "../Components/HomeContent";
const HomePage = () => {
  return (
    <div>
      <HeroImage imageUrl={HeroPageImage}>
        <Title text={"Home"} />
      </HeroImage>
      <HomeContent />
    </div>
  );
};

export default HomePage;
