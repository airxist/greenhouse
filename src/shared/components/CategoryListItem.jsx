import React from "react";
import { Link } from "react-router-dom";

const CategoryListItem = ({ category}) => {
  const { link, img, title } = category
  return (
    <Link to={link}>
      <div className="w-[189px] md:w-[389px] h-[231px] md:h-[308px] relative rounded-[8px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="size-full object-cover object-center"
        />
        <div className="py-2 px-4 bg-fysi-green text-white absolute bottom-0 rounded-tr-md">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CategoryListItem;
