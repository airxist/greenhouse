import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import Routing from "../../shared/components/Routing";
import ProductDetails from "./components/ProductDetails";
import Feedback from "./components/Feedback";
import ProductDisplay from "../../shared/components/ProductDisplay";
import hotItems from "../../mock-data/hot-deals.json";
import ProductListItem from "../../shared/components/ProductListItem";

const Product = () => {
  return (
    <ReusablesLyt>
      <div className="px-5 md:px-[112px]">
        <Routing type={2} />

        <ProductDetails />

        <Feedback />

        <div className="my-2">
          <ProductDisplay
            label="You may also like"
            items={hotItems}
            resourceName="product"
            ProductDisplayComponent={ProductListItem}
            wish={true}
            showRemote
          />
        </div>
      </div>
    </ReusablesLyt>
  );
};

export default Product;
