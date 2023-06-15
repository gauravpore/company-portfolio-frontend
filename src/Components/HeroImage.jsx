import React from "react";
import "./HeroImage.css";

const HeroImage = ({ imageUrl, children }) => {
  const isHomePage = window.location.pathname === "/";

  const heroImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: isHomePage ? "100vh" : "50vh",
    width: "100vw",
  };

  const blackTintStyles = {
    height: isHomePage ? "100vh" : "50vh",
  };

  return (
    <div className='hero-image'>
      <div className='background-image' style={heroImageStyles} />
      {isHomePage}
      <div className='hero-overlay' style={blackTintStyles} />
      <div className='content-container'>{children}</div>
    </div>
  );
};

export default HeroImage;
