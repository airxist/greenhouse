import React from "react";
import FormRow from "../../../shared/components/FormRow";

const CardInformation = () => {
  return (
    <div className="mt-6">
      <h2 className="font-medium">Enter Card Information</h2>

      <div className="mt-4 flex flex-col gap-y-4">
        <FormRow
          conClass="flex flex-col"
          label="Card number"
          inputClass="h-14 rounded-[6px] border p-4"
          placeholder="Placeholder"
        />
        <FormRow
          conClass="flex flex-col"
          label="Card number"
          inputClass="h-14 rounded-[6px] border p-4"
          placeholder="Placeholder"
        />
        <div className="grid grid-cols-2 justify-between gap-x-4">
          <FormRow
            conClass="flex flex-col"
            label="Expiry"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
          <FormRow
            conClass="flex flex-col"
            label="CVV"
            inputClass="h-14 rounded-[6px] border p-4"
            placeholder="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
