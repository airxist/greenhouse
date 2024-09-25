import React from "react";
import { sign_up_desc, sign_up_title } from "../../../constants";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";
import Google from "../../../svg/Google";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import { useGlobalAppContext } from "../../../context";
import Terms from "./Terms";
import CustomerSignUp from "./CustomerSignUp";
import VendorSignUp from "./VendorSignUp";

const SignUp = () => {
  const { registerAs } = useGlobalAppContext();
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title={registerAs === "customer" && sign_up_title}
        desc={
          registerAs === "customer"
            ? sign_up_desc
            : "Set up your shop by completing the following details"
        }
      />
      
        {registerAs === "customer" ? <CustomerSignUp /> : <VendorSignUp />}
    </div>
  );
};

export default SignUp;
