import React from "react";
import HeroImage from "../Components/HeroImage";
import ProductImage from "../Assets/ProductsImage.jpg";
import Title from "../Components/TitleComponent";

const ProductsPage = () => {
  return (
    <div>
      <HeroImage imageUrl={ProductImage}>
        <Title text={"Products"} />
      </HeroImage>
    </div>
  );
};

export default ProductsPage;
