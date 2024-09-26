import React from "react";
import Btn from "../../../shared/components/Btn";
import Plus from "../../../assets/svg/Plus";
import RegularList from "../../../shared/components/RegularList";
import { reviews } from "../../../constants";
import Review from "./Review";

const Feedback = () => {
  return (
    <div className="my-16 max-w-[700px]">
      <h2 className="text-[28px] font-bold">Customers Feedback</h2>
      <div className="my-5 space-y-4">
        <RegularList
          itemsToDisplay={reviews}
          resourceName="review"
          itemComponent={Review}
        />
      </div>

      <Btn
        text="Leave a review"
        icon={<Plus />}
        className="h-9 rounded-[8px] border-fysi-green bg-white text-fysi-green w-fit text-xs px-2 flex-center border-2"
      />
    </div>
  );
};

export default Feedback;
