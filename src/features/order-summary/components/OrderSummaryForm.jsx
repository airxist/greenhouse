import React from "react";
import FormRow from "../../../shared/components/FormRow";

const OrderSummaryForm = () => {
  return (
    <div className="rounded-[8px] px-2 md:p-8 pb-5  bg-white border mt-8">
      <h2 className="text-[28px] font-bold">Delivery Information</h2>

      <div className="mt-6 space-y-5">
        <div className="grid grid-cols-2 justify-between gap-x-5">
          <FormRow
            conClass="flex flex-col"
            label="Firstname"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
          <FormRow
            conClass="flex flex-col"
            label="Last Name"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
        </div>
        <FormRow
          conClass="flex flex-col"
          label="Address"
          inputClass="h-14 rounded-[6px] border p-4"
          placeholder="Placeholder"
        />
        <div className="grid grid-cols-2  gap-x-5">
          <FormRow
            conClass="flex flex-col"
            label="City/Town"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
          <FormRow
            conClass="flex flex-col"
            label="Zip Code"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
        </div>
        <div className="grid grid-cols-2  gap-x-5">
          <FormRow
            conClass="flex flex-col"
            label="Mobile Number"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
          <FormRow
            conClass="flex flex-col"
            label="Email Address"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryForm;
