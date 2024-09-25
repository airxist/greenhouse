import React from "react";
import SubScribe from "./SubScribe";

const Palm = () => {
  return (
    <div className="h-[527px] flex items-center relative">
      <div className="h-full flex items-center px-[15px] md:px-[110px] pt-8 pb-12">
        <SubScribe />
      </div>

      <div className="h-full w-full absolute top-0 -z-10">
        <img
          src="/hero_bg/palm.png"
          alt="palm"
          className="size-full object-cover object-center"
          style={{
            transform: "rotateY(180deg)",
          }}
        />
      </div>
    </div>
  );
};

export default Palm;
