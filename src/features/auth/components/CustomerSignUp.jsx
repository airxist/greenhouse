import React from "react";
import Google from "../../../svg/Google";
import Terms from "./Terms";
import Btn from "../../../shared/components/Btn";
import FormRow from "../../../shared/components/FormRow";

const CustomerSignUp = () => {
  return (
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
          href="/authentication/verification"
          text="Sign Up with Google"
          className="h-11 neutral-btn flex-center w-full mt-20 gap-4"
          icon={<Google />}
        />
      </div>
    </form>
  );
};

export default CustomerSignUp;
