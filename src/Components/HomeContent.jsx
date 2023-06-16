import React, { useState } from "react";
import "./HomeContent.css";
import marco from "../Assets/macro.jpg";
import image2 from "../Assets/electrician.jpg";
import image3 from "../Assets/people.jpg";

const YourComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: { marco }, alt: "Image 1" },
    { src: { image2 }, alt: "Image 2" },
    { src: { image3 }, alt: "Image 3" },
  ];

  const renderImages = () => {
    return images.map((image, index) => {
      const isActive = index === activeIndex;
      const classNames = isActive ? "image active" : "image";

      return (
        <div
          key={index}
          className={`image-wrapper ${isActive ? "active" : ""}`}
          onClick={() => handleImageClick(index)}
        >
          <img src={image.src} alt={image.alt} className={classNames} />
          <div className='overlay'>Why Choose Me?</div>
        </div>
      );
    });
  };

  return <div className='container'>{renderImages()}</div>;
};

export default YourComponent;
