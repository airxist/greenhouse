import React, { useState } from "react";
import Btn from "./Btn";
import RegularList from "./RegularList";
import { useNavigate } from "react-router-dom";

const Drop = ({ dropList, handleFunction }) => {
  const { icon: Icon, title } = dropList;
  return (
    <div
      className="flex items-center gap-3 cursor-pointer hover:scale-110"
      onClick={handleFunction}
    >
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <p>{title}</p>
    </div>
  );
};

const DropDown = ({
  text,
  icon,
  selections,
  dropDownClass,
  dropDownFunction,
}) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div className="relative">
      {/* trigger */}
      <Btn
        text={text}
        handleClick={() => setShouldShow((prev) => !prev)}
        onMouseLeave={() => setShouldShow(false)}
        icon={icon}
        className="flex items-center gap-x-1"
        
      />
      {/* main drop down */}
      {shouldShow && (
        <div
          className={`absolute top-11 z-50 ${dropDownClass}`}
          onMouseLeave={() => setShouldShow(false)}
        >
          <RegularList
            itemsToDisplay={selections}
            resourceName="dropList"
            itemComponent={Drop}
            listItemFunction={dropDownFunction}
          />
        </div>
      )}
    </div>
  );
};

export default DropDown;
