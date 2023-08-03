import React, { useEffect, useState } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../../Animation";
import loadingGear from "../../Assets/gear-loader.gif";

const Preloader = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    preLoaderAnim();

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Set the same delay as used in App.js for consistency

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`preloader ${showContent ? "show-content" : ""}`}>
      <img src={loadingGear} className='spinner' width={200} alt='spinner' />
      <div className='preloader-content'>
        <span className='preloader-text'>Welcome</span>
        <span className='preloader-text'>to</span>
        <span className='preloader-text'>Samadhan</span>
        <span className='preloader-text'>groups</span>
      </div>
    </div>
  );
};

export default Preloader;
