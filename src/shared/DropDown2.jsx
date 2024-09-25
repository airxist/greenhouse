import React, { useState } from "react";
import Btn from "./components/Btn";
import Arrow from "../assets/svg/Arrow";
import CatListItem from "../features/category-page/components/CatListItem";

const DropDownGroup = ({ label, groupList }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <Btn
        text={label}
        icon={<Arrow type="down" />}
        className="w-full flex items-center justify-between"
        position="right"
        handleClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
        <div className="w-full ">
          {groupList.map((item) => {
            return <CatListItem key={item.name} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

const DropDown2 = ({ text, filterGroup }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="relative">
      <Btn
        text={text}
        icon={<Arrow type="down" />}
        className="flex items-center gap-x-1"
        handleClick={() => setShowDropDown(!showDropDown)}
      />
      {showDropDown && (
        <div className="bg-foundation-grey border border-[#F9FAFB] absolute top-20 z-50 p-3 rounded-[8px] w-[176px] space-y-2">
          {filterGroup.map((group) => {
            return <DropDownGroup key={group.label} {...group} />;
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown2;
