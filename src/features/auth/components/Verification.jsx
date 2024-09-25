import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import OtpDigit from "./OtpDigit";
import Btn from "../../../shared/components/Btn";
import { useGlobalAppContext } from "../../../context";
import CustomerVerification from "./CustomerVerification";
import VendorVerification from "./VendorVerification";

const Verification = () => {
  const { registerAs } = useGlobalAppContext();
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title={registerAs === "customer" && "Verify your email"}
        desc={
          registerAs === "customer"
            ? "We have sent a verification code to Graceadebayo@gmail.com"
            : "Set up your shop by completing the following details"
        }
      />

      {registerAs === "customer" ? (
        <CustomerVerification />
      ) : (
        <VendorVerification />
      )}
    </div>
  );
};

export default Verification;
