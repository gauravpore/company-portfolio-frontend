import React from "react";
import ProductCards from "./ProductCards";

const ProductContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        padding: "20px",
      }}
    >
      <h1>Products</h1>
      <br />
      <div className='underline'></div>
      <ProductCards />
    </div>
  );
};

export default ProductContent;
