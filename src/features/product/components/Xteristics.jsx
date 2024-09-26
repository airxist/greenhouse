import React from "react";
import Xbadge from "./Xbadge";

const Xteristics = ({ xteristics }) => {
  return (
    <div className="flex items-center gap-x-1 mt-3">
      {xteristics.map((item) => {
        return <Xbadge key={item} text={item} />;
      })}
    </div>
  );
};

export default Xteristics;
