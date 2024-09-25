import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import { useGlobalAppContext } from "../../context";
import accessories from "../../mock-data/accessories.json";
import RegularList from "../../shared/components/RegularList";
import ProductListItem from "../../shared/components/ProductListItem";
import { filter_group } from "../../constants";
import DropDown2 from "../../shared/DropDown2";

const CategoryPage = () => {
  const { category } = useGlobalAppContext();
  return (
    <ReusablesLyt>
      <div className="px-5 md:px-[112px] h-16 border-4 flex items-center">
        <p className="text-fysi-gray-thick text-[28px] font-bold md:font-semibold md:text-base flex items-center">
          <span className="hidden md:block text-fysi-neutral">Home</span>{" "}
          {category}
        </p>
      </div>

      <div className="h-16 px-5 md:px-[112px] flex items-center gap-x-2 md:justify-between">
        <DropDown2 text="Filter" filterGroup={filter_group} />
      </div>

      <div className="px-3 md:px-[112px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <RegularList
            itemsToDisplay={accessories}
            resourceName="product"
            itemComponent={ProductListItem}
            className="h-[300px] md:h-[372px] overflow-hidden"
          />
        </div>
      </div>
    </ReusablesLyt>
  );
};

export default CategoryPage;
