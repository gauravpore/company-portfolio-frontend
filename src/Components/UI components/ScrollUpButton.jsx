import React, { useEffect, useState } from "react";
import "./ScrollUpButton.css";

const ScrollUpButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("clicked");
  };

  return (
    <div className={`scroll-up-container ${backToTop ? "show" : ""}`}>
      <div className='scroll-up-button' onClick={scrollUp}>
        <span className='arrow-up'>^</span>
      </div>
    </div>
  );
};

export default ScrollUpButton;
