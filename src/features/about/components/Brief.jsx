import React from "react";

const Brief = ({ title, img, brief, className }) => {
  return (
    <div className={`${className}`}>
      <div className="md:w-1/2">
        <h2 className="text-[28px] font-bold">{title}</h2>
        <p className="mt-2">{brief}</p>
      </div>

      <div className="w-full md:w-1/2 h-[376px] mt-6 border border-foundation-border rounded-[8px]">
        <img
          src={img}
          alt={title}
          className="size-full object-cover object-center rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default Brief;
