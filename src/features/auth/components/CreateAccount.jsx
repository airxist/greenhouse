import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";

const CreateAccount = () => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title="Create your account"
        desc="Lets get started by creating your account. To keep your account safe we need a strong password"
      />

      <form className="mt-6">
        <div className="flex flex-col gap-y-4">
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Email or Phone"
            name="username"
            value="Grace@adebayor@gamo"
            placeholder="Email or phone"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            type="password"
            label="Password"
            name="username"
            value="Grace@adebayor@gamo"
            placeholder="Email or phone"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            type="password"
            label="Confirm Password"
            name="username"
            value="Grace@adebayor@gamo"
            placeholder="Email or phone"
          />
        </div>

        <Btn href="/authentication/personal" text="Continue" className="auth-btn auth-primary-btn mt-8" />
      </form>
    </div>
  );
};

export default CreateAccount;
