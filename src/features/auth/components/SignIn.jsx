import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";
import { Link } from "react-router-dom";
import Google from "../../../assets/svg/Google";

const SignIn = () => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title="Welcome back"
        desc="Welcome back, please enter your details"
      />

      <form className="mt-6 w-full border">
        <div className="flex flex-col gap-y-4">
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Email"
            name="email"
            value="airxist@gmail.com"
            placeholder="email"
          />
          <div>
            <FormRow
              conClass="auth-con"
              inputClass="auth-input"
              type="password"
              label="Password"
              name="password"
              value="Ofurum"
              placeholder="last"
            />
            <div className="text-[0.625rem] flex items-center justify-between">
              <p>Remember me</p>
              <Link to="/authentication/forget-pass">Forget password</Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Btn
            href="/authentication/personal"
            text="Sign In"
            className="auth-btn auth-primary-btn"
          />
          <Btn
            href="/authentication/verification"
            text="Sign Up with Google"
            className="auth-btn auth-neutral-btn mt-20 gap-4"
            icon={<Google />}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
