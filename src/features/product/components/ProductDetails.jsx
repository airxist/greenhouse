import React from "react";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  return (
    <div className="w-full md:flex items-start gap-x-3">
      <div className=" md:w-5/12 h-[276px] md:h-[477px] rounded-[8px]">
        <img
          src="/hero_bg/sustainability.png"
          alt="product"
          className="size-full object-cover object-center rounded-[8px]"
        />
      </div>
      <ProductInfo />
    </div>
  );
};

export default ProductDetails;
