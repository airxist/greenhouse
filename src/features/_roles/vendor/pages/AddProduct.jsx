import React from "react";
import ProductInformation from "../components/add-form/ProductInformation";
import UploadImages from "../components/add-form/UploadImages";
import Variants from "../components/add-form/Variants";
import Specification from "../components/add-form/Specification";
import Pricing from "../components/add-form/Pricing";
import Btn from "../../../../shared/components/Btn";

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
