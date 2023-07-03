import React from "react";
import HeroImage from "../Components/UI components/HeroImage";
import ProductImage from "../Assets/ProductsImage.jpg";
import Title from "../Components/UI components/TitleComponent";
import ProductContent from "../Components/ProductPage Content/ProductContent";

const ProductsPage = () => {
  return (
    <div>
      <HeroImage imageUrl={ProductImage}>
        <Title text={"Products"} />
      </HeroImage>
      <ProductContent />
    </div>
  );
};

export default ProductsPage;
