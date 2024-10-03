import React from "react";
import Heading from "../../../../shared/components/Heading";
import Btn from "../../../../shared/components/Btn";
import ToggleOptions from "../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";
import SearchBarRow from "../../../../shared/components/_roles/SearchBarRow";

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

      <SearchBarRow />
    </>
  );
};

export default Promotion;
