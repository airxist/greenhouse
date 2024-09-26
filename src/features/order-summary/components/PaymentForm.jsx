import Btn from "../../../shared/components/Btn";
import CardInformation from "./CardInformation";
import Coupon from "./Coupon";
import PayMethod from "./PayMethod";
import SubTotal from "./SubTotal";

const PaymentForm = () => {
  return (
    <div className="w-full md:w-4/12 rounded-[8px] bg-white p-2 md:p-8 border mt-6 md:mt-0">
      <h2 className="text-2xl font-bold">Payment Information</h2>

      <div className="mt-7">
        <Coupon />
        <PayMethod />
        <CardInformation />
        <SubTotal />
        <hr />
        <div className="flex items-center justify-between font-medium text-sm mt-6">
          <p>Total</p>
          <p>#800</p>
        </div>

        <Btn
          href="/thanks"
          text="Pay #10,800"
          className="h-14 w-full bg-fysi-green flex-center rounded-[8px] text-white mt-[28px]"
        />
      </div>
    </div>
  );
};

export default PaymentForm;
