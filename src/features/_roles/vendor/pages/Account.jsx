import React from "react";
import Heading from "../../../../shared/components/Heading";
import Btn from "../../../../shared/components/Btn";
import ToggleOptions from "../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";

const Account = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between border">
        <Heading title="Account Statement" tclass="text-xl font-medium" />

        <Btn
          text="Export Transactions"
          className="btn-sm btn--primary rounded-[8px]"
        />
      </div>

      <div className="flex items-center justify-between">
        <ToggleOptions className="mt-9 mb-8" options={toggle_options.account} />

        <div className="flex items-center gap-x-6">
          <label>
            <input type="radio" name="currency" />
            USD
          </label>
          <label>
            <input type="radio" name="currency" checked />
            NGN
          </label>
        </div>
      </div>
    </div>
  );
};

export default Account;
