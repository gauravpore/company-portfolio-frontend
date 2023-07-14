import React from "react";
import "./HeroImage.css"; // Import the CSS file for styling

const HeroImage = ({ imageUrl, children }) => {
  const isHomePage = window.location.pathname === "/"; // Check if it's the home page
  const isProductPage = window.location.pathname === "/products";
  const isAboutPage = window.location.pathname === "/about";

  // Inline styles for the hero image component
  const heroImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: isHomePage || isProductPage || isAboutPage ? "100vh" : "70vh",
    width: "100vw",
    display: "flex",
    justifyContent: isHomePage ? "center" : "end",
    alignItems: isHomePage ? "center" : "end",
  };

  const blackTintStyles = {
    height: isHomePage ? "100%" : "100%",
    background: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <div className="hero-image" style={heroImageStyles}>
      <div className="black-tint" style={blackTintStyles}></div>
      <div className="wrapper">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeroImage;
