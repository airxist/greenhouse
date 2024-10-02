import React from "react";
import HeadDesc from "../../../shared/components/auth/HeadDesc";
import OtpDigit from "../components/OtpDigit";
import Btn from "../../../shared/components/Btn";

const StepTwoCustomer = ({ goToNext }) => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title="Verify your email"
        desc="We have sent a verification code to Graceadebayo@gmail.com"
      />

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <OtpDigit />
          <OtpDigit />
          <OtpDigit />
          <OtpDigit />
        </div>

        <div className="mt-9">
          <Btn
            // href="/authentication/create-account"
            text="Submit"
            className="auth-btn auth-primary-btn"
            handleClick={goToNext}
          />

          <div className="mt-2 text-center max-w-[452px] mx-auto">
            <p>
              Didn't receive the verification code? It might take a moment. You
              can request a new code in 60 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwoCustomer;
