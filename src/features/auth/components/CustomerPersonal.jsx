import React from "react";
import Btn from "../../../shared/components/Btn";
import FormRow from "../../../shared/components/FormRow";
import HeadDesc from "../../../shared/components/auth/HeadDesc";

const CustomerPersonal = () => {
  return (
    <>
      <form className="mt-6">
        <div className="flex flex-col gap-y-4">
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Firstname"
            name="firstname"
            value="Josemaria"
            placeholder="your name first"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Last name"
            name="lastname"
            value="Ofurum"
            placeholder="last"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="phone number"
            name="Phone number"
            value="0818388388"
            placeholder="Email or phone"
          />
        </div>

        <Btn
          href="/authentication/sign-in"
          text="Continue"
          className="auth-btn auth-primary-btn mt-8"
        />
      </form>
    </>
  );
};

export default CustomerPersonal;
