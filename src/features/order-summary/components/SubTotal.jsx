import React from "react";

const SubTotal = () => {
  return (
    <div className="my-6 flex flex-col gap-y-4">
      <div className="flex items-center justify-between font-medium text-sm">
        <p>SubTotal</p>
        <p>#10000</p>
      </div>
      <div className="flex items-center justify-between font-medium text-sm">
        <p>Promo Discount</p>
        <p>#100</p>
      </div>
      <div className="flex items-center justify-between font-medium text-sm">
        <p>Shipping</p>
        <p>#800</p>
      </div>
    </div>
  );
};

export default SubTotal;
