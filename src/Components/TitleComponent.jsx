import React from "react";
import "./TitleComponent.css";

const Title = ({ text }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{text}</h1>
      <div className='title-underline' />
    </div>
  );
};

export default Title;
