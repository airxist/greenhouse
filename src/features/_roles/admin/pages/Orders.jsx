import FilterIcon from "../../../../assets/svg/FilterIcon";
import { toggle_options } from "../../../../constants";
import Btn from "../../../../shared/components/Btn";
import Heading from "../../../../shared/components/Heading";
import ToggleOptions from "../../customer/components/ToggleOptions";

const Orders = () => {
  return (
    <div className="px-8 py-8 border-4">
      <div className="flex items-center justify-between border">
        <div>
          <Heading title="Orders" tclass="text-xl font-medium" />
          <p>routing &gt; routing</p>
        </div>

        <Btn text="Export" className="btn-sm btn--primary rounded-[8px]" />
      </div>

      <div className="flex items-center justify-between">
        <ToggleOptions
          options={toggle_options.admin_order}
          style={2}
          className="mt-6 mb-8"
        />

        <div className="flex items-center gap-x-2">
          <Btn
            text="Select Date"
            className="btn-sm btn--neutral rounded-[8px]"
          />

          <Btn
            icon={<FilterIcon />}
            className="btn-sm btn--neutral rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
