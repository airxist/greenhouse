import React from "react";
import Heading from "../../../shared/components/Heading";

const Overlay = () => {
  return (
    <div className="size-full bg-fysi-green/60 flex-center absolute top-0 left-0">
      <Heading
      conClass="w-[333px]"
        title="Go Green With Us"
        tclass="text-[4rem] font-bold text-foundation"
        desc="List your eco-friendly product in our store"
        dclass="text-foundation"
      />
    </div>
  );
};

export default Overlay;
