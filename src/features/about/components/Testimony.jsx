import React from "react";
import Quote from "../../../assets/svg/Quote";

const Testimony = ({ testimony }) => {
  const { text, name, img, role, rating } = testimony;
  return (
    <div className="p-6 bg-white rounded-[8px] w-full md:w-[424px] md:h-[230px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Quote />
        </div>

        <div className="my-4">
          <p className="text-sm">{text}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="size-12 rounded-full bg-slate-500">
              <img src={img} alt={name} />
            </div>

            <div>
              <p className="font-medium">{name}</p>
              <p>{role}</p>
            </div>
          </div>

          <div>rating</div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
