import React from "react";
import { what_we_offer } from "../../../constants";
import SingleOffer from "../components/SingleOffer";
import RegularList from "../../../shared/components/RegularList";

const Offer = () => {
  return (
    <div className="px-4 pt-7 pb-9 max-w-[1216px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <RegularList
          itemsToDisplay={what_we_offer}
          resourceName="offer"
          itemComponent={SingleOffer}
        />
      </div>
    </div>
  );
};

export default Offer;
