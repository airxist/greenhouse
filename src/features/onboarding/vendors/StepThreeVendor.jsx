import React from "react";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";
import HeadDesc from "../../../shared/components/auth/HeadDesc";

const StepThreeVendor = ({goToNext}) => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc desc="Set up your shop by completing the following details" />

      <form className="mt-6">
        <div className="flex flex-col gap-y-6">
          <FormRow inputClass="auth-input" label="E-mail Address" />
          <FormRow
            inputClass="auth-input"
            placeholder="enter-verification code"
          />
        </div>

        <div className="mt-20">
          <Btn
            // href="/authentication/personal"
            text="Verify"
            className="auth-btn auth-primary-btn"
            handleClick={goToNext}
          />
          <Btn
            text="Resend Code"
            className="auth-btn auth-transparent-btn mt-7"
          />
        </div>
      </form>
    </div>
  );
};

export default StepThreeVendor;
