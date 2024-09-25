import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import { useGlobalAppContext } from "../../../context";
import CustomerPersonal from "./CustomerPersonal";
import VendorPersonal from "./VendorPersonal";

const Personal = () => {
  const { registerAs } = useGlobalAppContext();
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title="Personal Details"
        tClass={registerAs === 'vendor' && 'font-bold text-center'}
        desc={
          registerAs === "customer"
            ? "We'd love to get to know you better! Please fill in a few details."
            : "Set up your pass word and provide your phone number"
        }
      />

      {registerAs === 'customer' ? <CustomerPersonal /> : <VendorPersonal />}
    </div>
  );
};

export default Personal;
