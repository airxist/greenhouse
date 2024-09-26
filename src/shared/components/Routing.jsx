import React from "react";

const Routing = ({ category, type=1 }) => {
  const Routing1 = () => {
    return (
      <div className="px-5 md:px-[112px] h-16 border-4 flex items-center">
        <p className="text-fysi-gray-thick text-[28px] font-bold md:font-semibold md:text-base flex items-center">
          <span className="hidden md:block text-fysi-neutral">Home</span>{" "}
          {category}
        </p>
      </div>
    );
  };

  const Routing2 = () => {
    return (
      <div className="px-5 md:px-[112px] h-16 border-4 flex items-center">
        <p className="text-fysi-gray-thick flex items-center">
          <span className=" text-fysi-neutral">Home</span> {category}
        </p>
      </div>
    );
  };

  return type === 1 ? Routing1() : Routing2();
};

export default Routing;
