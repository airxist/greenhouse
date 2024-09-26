import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import { sign_up_desc, sign_up_title } from "../../../constants";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";
import Terms from "../../auth/components/Terms";
import Google from "../../../assets/svg/Google";

const StepOneCustomer = ({ goToNext }) => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc title={sign_up_title} desc={sign_up_desc} />

      <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
        <FormRow
          conClass="auth-con"
          label="Email or Phone number"
          placeholder="enter your email or phone number"
          name="detail"
          inputClass="auth-input"
        />
        <div className="mt-9">
          <Btn className="auth-btn auth-primary-btn" text="Continue" />

          <Terms />

          <Btn
            // href="/authentication/verification"
            text="Sign Up with Google"
            className="h-11 neutral-btn flex-center w-full mt-20 gap-4 auth-btn"
            icon={<Google />}
            handleClick={() => goToNext()}
          />
        </div>
      </form>
    </div>
  );
};

export default StepOneCustomer;
