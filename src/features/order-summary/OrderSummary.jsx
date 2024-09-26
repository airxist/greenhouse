import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import OrderSummaryForm from "./components/OrderSummaryForm";
import PaymentForm from "./components/PaymentForm";

const OrderSummary = () => {
  return (
    <ReusablesLyt>
      <section className="px-1 md:px-[112px] py-8">
        <div className="w-full md:flex gap-x-8">
          <div className="w-full md:w-8/12">
            <div className="rounded-[8px] p-10 bg-white border flex-center">
              <h2>List of items</h2>
            </div>

            <OrderSummaryForm />
          </div>

          <PaymentForm />
        </div>
      </section>
    </ReusablesLyt>
  );
};

export default OrderSummary;
