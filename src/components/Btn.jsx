import React from "react";

const Btn = ({ text, classname, icon, position = "left", handleClick }) => {
  return (
    <button
      className={
        classname ||
        "bg-green font-medium text-base text-white w-[85px] h-[35px] flex-center rounded-[4px]"
      }
      onClick={handleClick}
    >
      {position === "left" && icon}
      {text ? text : null}
      {position === "right" && icon}
    </button>
  );
};

export default Btn;
