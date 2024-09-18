import React from "react";
import Btn from "./Btn";

const SearchBar = ({ placeholder, value }) => {
  return (
    <div className="md:w-10/12 lg:w-[347px] h-9 bg-green/60 flex items-center border rounded-[4px]">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="h-full bg-transparent w-full rounded-[4px]"
      />
      <Btn text="Search" />
    </div>
  );
};

export default SearchBar;
