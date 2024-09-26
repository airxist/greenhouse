import Btn from "../../../shared/components/Btn";

const Coupon = () => {
  return (
    <div>
      <p className="font-bold">Apply Discount</p>
      <div className="flex items-center gap-x-4 mt-3">
        <input
          type="text"
          placeholder="Enter code"
          className="h-14 rounded-[8px] p-4 bg-[#F9FAFB]"
        />
        <Btn
          text="Apply"
          className="h-14 w-[102px] rounded-[8px] flex-center bg-fysi-green text-white"
        />
      </div>
    </div>
  );
};

export default Coupon;
