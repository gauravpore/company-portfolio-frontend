import React from "react";
import "./ProductContent.css";
import productone from "../../Assets/products/productone.png";
import producttwo from "../../Assets/products/producttwo.png";
import productthree from "../../Assets/products/productthree.png";

const Tins = [
  {
    name: "Integrated Tin",
    Capacity: ["1 Ltr", "4 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Brush In Tin",
    Capacity: ["50 ML", "118 ML", "125 ML", "250 ML", "500 ML", "1 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "DT Tin",
    Capacity: ["500 ml", "1 Ltr", "4 Ltr"],
    product_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
      <div className='Products-Container'>
        <div className='name-product'>
          <h1>Products We Have</h1>
        </div>

        <div className='BrushInTin-Container'>
          <div className='BrushInTin-Polygon-warper'>
            <div className='BrushInTin-Polygon-first'>
              <div className='content'>
                <h2>{Tins[0].name}</h2>
                <p>{Tins[0].product_description}</p>
                <br />
                <br />
                <br />
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
          </div>
          <img className='tinimage' src={productone} alt='product' />

          <div className='BrushInTin-Polygon-second'></div>
        </div>

        <br />
        <div className='DtTin-Container'>
          <div className='DtTin-Polygon-warper'>
            <div className='DtTin-Polygon-first'>
              <div className='Dt-content'>
                <h2>{Tins[1].name}</h2>
                <p>{Tins[1].product_description}</p>
                <br />
                <br />
                <br />
                <h3>Capacity</h3>
                <div className='rounded-div'>
                  {Tins[1].Capacity.map((capacity, index) => (
                    <div key={index} className='rounded'>
                      {capacity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img className='tinimage' src={producttwo} alt='product' />
          <div className='DtTin-Polygon-second'></div>
        </div>
      </div>

      <div className='BrushInTin-Container'>
        <div className='BrushInTin-Polygon-warper'>
          <div className='BrushInTin-Polygon-first'>
            <h2>{Tins[2].name}</h2>
            <p>{Tins[2].product_description}</p>
            <br />
            <br />
            <br />
            <h3>Capacity</h3>
            <div className='rounded-div'>
              {Tins[2].Capacity.map((capacity, index) => (
                <div key={index} className='rounded'>
                  {capacity}
                </div>
              ))}
            </div>
          </div>
        </div>
        <img className='tinimage' src={productthree} alt='product' />
        <div className='BrushInTin-Polygon-second'></div>
      </div>
    </div>
  );
};

export default ProductContent;
