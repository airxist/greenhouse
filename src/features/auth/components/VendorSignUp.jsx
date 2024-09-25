import React, { useState } from "react";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";
import { useNavigate } from "react-router-dom";

const VendorSignUp = () => {
  const navigate = useNavigate();
  const [process, setProcess] = useState("Country");
  const handleSubmit = () => {
    if (process === 'Country') {
      setProcess('Email')
      return;
    }
    // navigate
    navigate('/authentication/verification')
  }

  return (
    <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
      <FormRow
        conClass="auth-con"
        label={process}
        placeholder="Select Your Country"
        name={process}
        inputClass="auth-input"
      />

      <div className="mt-9">
        <Btn className="auth-btn auth-primary-btn" text="Next" handleClick={handleSubmit} />
      </div>
    </form>
  );
};

export default VendorSignUp;
