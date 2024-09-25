import React from "react";
import ProductDisplay from "../../../shared/components/ProductDisplay";
import { categories } from "../../../constants";
import CategoryListItem from "../../../shared/components/CategoryListItem";
import ProductListItem from "../../../shared/components/ProductListItem";
import demandItems from "../../../mock-data/demand.json";
import hotItems from "../../../mock-data/hot-deals.json";

const ShowCase = () => {
  return (
    <div className="pb-5 md:px-[112px] border-8">
      <div>
        <ProductDisplay
          label="Categories"
          items={categories}
          resourceName="category"
          ProductDisplayComponent={CategoryListItem}
          showRemote
        />

        <ProductDisplay
          label="Products on Demand"
          items={demandItems}
          resourceName="product"
          ProductDisplayComponent={ProductListItem}
          wish={true}
          showRemote
        />

        <ProductDisplay
          label="Hot Deals"
          items={hotItems}
          resourceName="product"
          ProductDisplayComponent={ProductListItem}
          wish={true}
          showRemote
        />
      </div>
    </div>
  );
};

export default ShowCase;
