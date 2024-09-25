import React from "react";
import Btn from "../../../shared/components/Btn";

const Hero = () => {
  return (
    <div className="w-full h-[253px] md:h-[581px] relative">
      <div className="size-full absolute top-0 left-0 -z-10">
        <img
          src="/hero_bg/home_bg.jpg"
          alt="home"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="bg-fysi-green/80 size-full text-center flex-center flex-col py-10 px-4">
        <div className="max-w-[776px]">
          <h1 className="text-5xl md:text-[107px] text-white font-bold">
            Eco-Products, Made for You
          </h1>
          <p className="text-xs md:text-2xl font-medium text-white mt-1">
            Shop Smart, Live Green
          </p>
        </div>

        <Btn
          text="Shop Now"
          className="bg-foundation text-fysi-green rounded-md w-[82px] md:w-[187px] h-6 md:h-[55px] text-xs md:text-base font-medium mt-[14px] md:mt-8"
        />
      </div>
    </div>
  );
};

export default Hero;
