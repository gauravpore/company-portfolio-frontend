import React from "react";
import HeroImage from "../Components/HeroImage";
import IndustryImage from "../Assets/IndustryImage.jpg";
import Title from "../Components/TitleComponent";
const IndustryPage = () => {
  return (
    <div>
      <HeroImage imageUrl={IndustryImage}>
        <Title text={"Industry"} />
      </HeroImage>
    </div>
  );
};

export default IndustryPage;
