import React from "react";
import Btn from "../../../shared/components/Btn";
import Minus from "../../../assets/svg/Minus";
import Plus from "../../../assets/svg/Plus";

const Counter = () => {
  return (
    <div className="h-11 w-[127px] rounded-[8px] border border-x-foundation-600 flex-center px-3">
      <div className="flex items-center justify-between w-full">
        <Btn icon={<Minus />} />
        <span>0</span>
        <Btn icon={<Plus />} />
      </div>
    </div>
  );
};

export default Counter;
