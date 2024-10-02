import React from "react";
import ToggleOptions from "../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";
import SearchBar from "../../../../shared/components/SearchBar";
import Btn from "../../../../shared/components/Btn";
import FilterIcon from "../../../../assets/svg/FilterIcon";

const OrderIndex = () => {
  return (
    <>
      <ToggleOptions
        className="mt-8 mb-7"
        options={toggle_options.orderIndex}
      />

      <div>
        <div className="flex items-center justify-between">
          <SearchBar
            className="w-full max-w-[375px] h-9"
            color="black"
            placeholder="Search"
          />

          <div className="flex items-center gap-x-2">
            <Btn
              text="Select Date"
              className="btn-sm btn--neutral rounded-[8px]"
            />

            <Btn
              icon={<FilterIcon />}
              className="btn-sm btn--neutral rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderIndex;
