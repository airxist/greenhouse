import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";

const StepOneVendor = ({ goToNext }) => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc desc="Set up your shop by completing the following details" />

      <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
        <FormRow
          conClass="auth-con"
          label="Country"
          placeholder="Select Your Country"
          name="country"
          inputClass="auth-input"
        />

        <div className="mt-9">
          <Btn
            className="auth-btn auth-primary-btn"
            text="Next"
            handleClick={goToNext}
          />
        </div>
      </form>
    </div>
  );
};

export default StepOneVendor;
