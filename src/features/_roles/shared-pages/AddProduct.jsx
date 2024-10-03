import React from "react";
import Btn from "../../../shared/components/Btn";
import {
  Pricing,
  ProductInformation,
  Specification,
  UploadImages,
  Variants,
} from "../../../shared/components/_roles/add-form";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mt-9 space-y-6" onSubmit={handleSubmit}>
      <ProductInformation />
      <UploadImages />
      <Variants />
      <Specification />
      <Pricing />
      <Btn
        text="Submit"
        className="bg-fysi-green text-white w-full h-14 rounded-[8px]"
      />
    </form>
  );
};

export default AddProduct;
