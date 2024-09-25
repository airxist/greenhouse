import React from "react";
import Logo from "../../../svg/Logo";
import Btn from "../../../shared/components/Btn";
import { useGlobalAppContext } from "../../../context";

const Account = () => {
  const { openModalWithContent } = useGlobalAppContext();
  return (
    <div>
      <div>
        <Logo />
        <p>Set up your shop by completing the following details</p>
      </div>

      <form
        className="w-full max-w-[659px] border"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <div>
            <p>Account Type</p>
            <div className="flex gap-x-14">
              <label htmlFor="account-type">
                <input type="radio" name="account-type" />
                Business
              </label>

              <label htmlFor="account-type">
                <input type="radio" name="account-type" />
                Individual
              </label>
            </div>
          </div>
        </div>
        <div>
          <Btn
            className="auth-btn auth-primary-btn"
            text="Submit"
            handleClick={() => openModalWithContent("Account")}
          />
        </div>
      </form>
    </div>
  );
};

export default Account;
