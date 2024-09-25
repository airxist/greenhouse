import React from "react";
import Btn from "../../../shared/components/Btn";
import RegularList from "../../../shared/components/RegularList";
import { returns_info } from "../../../constants";
import ReturnInfoBox from "../components/ReturnInfoBox";

const Returns = () => {
  return (
    <section className="px-5 md:px-[112px]">
      <div className="pt-5 pb-20">
        <div className="space-y-6">
          <RegularList
            itemsToDisplay={returns_info}
            resourceName="info"
            itemComponent={ReturnInfoBox}
          />
        </div>
        <Btn
          text="Cotact Support"
          className="rounded-[8px] bg-fysi-green text-white flex-center w-[249px] h-14 mt-6"
        />
      </div>
    </section>
  );
};

export default Returns;
