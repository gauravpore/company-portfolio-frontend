import React from "react";
import HeroImage from "../Components/HeroImage";
import HeroPageImage from "../Assets/HomePageImage.jpg";
import "./HomePage.css";

// import HomeContent from "../Components/HomeContent";
const HomePage = () => {
  return (
    <div>
      <HeroImage imageUrl={HeroPageImage}>
        <h1>Home</h1>
      </HeroImage>
    </div>
  );
};

export default HomePage;
