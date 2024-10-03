import React from "react";
import Heading from "../Heading";

const OverviewBoard = ({ title, desc, className, children }) => {
  return (
    <div className={`overview-board ${className}`}>
      <div className="">
        <Heading title={title} tclass="overview-board__title" desc={desc} dclass="text-sm" />
      </div>

      {children}
    </div>
  );
};

export default OverviewBoard;
