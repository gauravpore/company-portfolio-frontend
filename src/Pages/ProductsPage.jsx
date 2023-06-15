import React from "react";
import HeroImage from "../Components/HeroImage";
import ProductImage from "../Assets/ProductsImage.jpg";
const ProductsPage = () => {
  return (
    <div>
      <HeroImage imageUrl={ProductImage} />
    </div>
  );
};

export default ProductsPage;
