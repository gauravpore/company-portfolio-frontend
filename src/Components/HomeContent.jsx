import React from "react";
import "./HomeContent.css";
import macro from "../Assets/macro.jpg";
import people from "../Assets/people.jpg";
import electrician from "../Assets/electrician.jpg";

const images = [
  {
    id: 1,
    imageUrl: { macro },
  },
  {
    id: 2,
    imageUrl: { people },
  },
  {
    id: 3,
    imageUrl: { electrician },
  },
];

const HomeContent = () => {
  return (
    <div className='Home-Container'>
      <div className='Home-title'>
        <h1>Why Choose us?</h1>
        <div></div>
      </div>
      <div className='image-container'>
        {images.map((image) => (
          <div
            className={`image-item ${
              image.id === 1 ? "full-height" : "half-height"
            }`}
            key={image.id}
            style={{ backgroundImage: `url(${image.imageUrl})` }}
          />
        ))}
      </div>
      <div className='home-right'></div>
    </div>
  );
};

export default HomeContent;
