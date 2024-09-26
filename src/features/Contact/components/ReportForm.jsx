import React from "react";
import FormRow from "../../../shared/components/FormRow";
import Btn from "../../../shared/components/Btn";

const ReportForm = () => {
  return (
    <>
      <form className="max-w-[1010px] mx-auto md:bg-white py-6 md:px-9 md:border rounded-[8px]">
        <div className="flex flex-col gap-y-4">
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="name"
            placeholder="Enter name"
            label="Name"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="email"
            placeholder="Enter name"
            label="Email Address"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="issue"
            placeholder="Issue"
            label="Issue Type"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="order"
            placeholder="Issue"
            label="Order Number"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="order"
            placeholder="Issue"
            label="Product name"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="order"
            placeholder="Issue"
            label="Issue Description"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="order"
            placeholder="Issue"
            label="Preferred Resolution"
          />
          <FormRow
            conClass="flex flex-col"
            inputClass="w-full h-14 rounded-[6px] border border-[#D0D5DD] p-4"
            lableClass="font-medium text-sm"
            name="order"
            placeholder="Issue"
            label="Additional Comments"
          />
        </div>

        <div className="md:hidden mt-11">
          <h2 className="font-medium text-2xl">What Happens Next?</h2>
          <p className="text-sm">
            Once you submit your report, our support team will review the
            details and get back to you within 24-48 hours. We'll work closely
            with you to resolve the issue as quickly as possible.
          </p>
        </div>

        <div className="mt-6">
          <Btn
            text="Submit"
            className="w-full bg-fysi-green flex-center rounded-[8px] h-[55px] text-white"
          />
        </div>
      </form>

      <div className="mt-8 hidden md:block">
        <h2 className="font-bold text-[28px]">What Happens Next?</h2>
        <p className="text-xl">
          Once you submit your report, our support team will review the details
          and get back to you within 24-48 hours. We'll work closely with you to
          resolve the issue as quickly as possible.
        </p>
      </div>
    </>
  );
};

export default ReportForm;
