import Heading from "../../../../shared/components/Heading";
import Btn from "../../../../shared/components/Btn";
import Analytics from "../components/Analytics";
import ToggleOptions from "../../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";

const Monitor = () => {
  return (
    <>
      <div className="flex items-center justify-between border">
        <Heading title="Monitor Promotions" tclass="text-xl font-medium" />

        <Btn text="Export" className="btn-sm btn--primary rounded-[8px]" />
      </div>

      <Analytics />

      <ToggleOptions options={toggle_options.monitor} />
    </>
  );
};

export default Monitor;
