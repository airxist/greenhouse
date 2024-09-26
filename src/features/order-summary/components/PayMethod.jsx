import React from "react";

const PayMethod = () => {
  return (
    <div className="flex flex-col gap-y-5 mt-6">
      <p className="font-bold">Pay With</p>
      <div className="flex flex-col gap-y-4">
        <label className="font-medium">
          <input type="radio" name="method" className="mr-2" />
          Debit or Credit Card
        </label>
        <label className="font-medium">
          <input type="radio" name="method" className="mr-2" />
          Pay on Delivery
        </label>
      </div>
    </div>
  );
};

export default PayMethod;
