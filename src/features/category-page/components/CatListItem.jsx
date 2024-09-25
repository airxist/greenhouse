import React from "react";

const CatListItem = ({ name, label, color }) => {
  const CatListItem1 = () => {
    return (
      <div className="flex items-center gap-x-1 py-1">
        <input type="checkbox" name={name} />
        <label htmlFor={name} className="text-sm">{label}</label>
      </div>
    );
  };

  const CatListItem2 = () => {
    return (
      <div className="flex items-center gap-x-1 py-1">
        <span
          className="size-4 rounded-md"
          style={{
            backgroundColor: color,
          }}
        />
        <p className="text-sm">{name}</p>
      </div>
    );
  };

  return color ? CatListItem2() : CatListItem1();
};

export default CatListItem;
