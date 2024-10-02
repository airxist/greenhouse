import React from "react";
import Heading from "../../../../shared/components/Heading";
import Btn from "../../../../shared/components/Btn";
import ToggleOptions from "../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";
import SearchBar from "../../../../shared/components/SearchBar";
import FilterIcon from "../../../../assets/svg/FilterIcon";

const Promotion = () => {
  return (
    <>
      <div className="flex items-center justify-between border">
        <Heading title="Promotion Management" tclass="text-xl font-medium" />

        <Btn
          text="Create new promotion"
          className="btn-sm btn--primary rounded-[8px]"
        />
      </div>

      <ToggleOptions className="mt-8 mb-6" options={toggle_options.promotion} />

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
    </>
  );
};

export default Promotion;
