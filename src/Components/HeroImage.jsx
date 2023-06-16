import React from "react";
import "./HeroImage.css"; // Import the CSS file for styling

const HeroImage = ({ imageUrl, children }) => {
  const isHomePage = window.location.pathname === "/"; // Check if it's the home page

  // Inline styles for the hero image component
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
    <div className='hero-image' style={heroImageStyles}>
      <div className='black-tint' style={blackTintStyles}></div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default HeroImage;
