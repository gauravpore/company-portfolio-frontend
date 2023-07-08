import React from "react";
import ProductCards from "./ProductCards";
import "./ProductContent.css";
import productHeaderImage from "../../Assets/products/product-header.png";

const Tins = [
  {
    name: "Integrated Tin",
    Capacity: ["1 Ltr", "4 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Brush In Tin",
    Capacity: ["2 Ltr", "5 Ltr", "10 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "DT Tin",
    Capacity: ["500 ml", "1 Ltr", "2 Ltr", "3 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ProductContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px auto",
        padding: "20px",
        maxWidth: "1200px",
      }}
    >
      {/* Product Header */}
      <div className='produt-header'>
        <div className='flex-container'>
          <h1>
            <span className='highlight'>Pioneers</span> of Top Quality Tin
            Containers
            <div className='underline'></div>
          </h1>
          <img src={productHeaderImage} alt='Product header' />
        </div>
      </div>

      <br />

      {/* Integrated Tin */}
      <div className='BrushInTin-Container'>
        <div className='BrushInTin-Polygon-warper'>
          <div className='BrushInTin-Polygon-first'>
            <h2>{Tins[0].name}</h2>
            <p>{Tins[0].product_description}</p>
            <h3>Capacity</h3>
            <div className='rounded-div'>
              {Tins[0].Capacity.map((capacity, index) => (
                <div key={index} className='rounded'>
                  {capacity}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='BrushInTin-Polygon-second'></div>
      </div>

      <ProductCards />
    </div>
  );
};

export default ProductContent;
