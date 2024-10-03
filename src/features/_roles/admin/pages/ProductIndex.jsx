import React from "react";
import Choose from "../../../../shared/components/Choose";
import SearchBarRow from "../../../../shared/components/_roles/SearchBarRow";
import Heading from "../../../../shared/components/Heading";
import { useNavigate } from "react-router-dom";

const ProductIndex = () => {
  const navigate = useNavigate();

  const goToAddProduct = () => {
    navigate('add-product')
  }
  return (
    <>
      <div className="flex items-center justify-between border">
        <Heading
          title="Product"
          tclass="text-xl font-medium"
          desc="Showing all products"
        />

        <Choose
          text1="New Category"
          text2="Add Product"
          sharedStyle="btn-sm btn--primary rounded-[8px]"
          className="gap-x-4"
          handle2={goToAddProduct}
        />
      </div>

      <SearchBarRow className="mt-3 mb-6" />
    </>
  );
};

export default ProductIndex;
