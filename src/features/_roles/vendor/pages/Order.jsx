import { Route, Routes, useNavigate } from "react-router-dom";
import Btn from "../../../../shared/components/Btn";
import Heading from "../../../../shared/components/Heading";
import Choose from "../../../../shared/components/Choose";
import OrderIndex from "./OrderIndex";
import TrackOrder from "./TrackOrder";

const Order = () => {
  const navigate = useNavigate();

  const handle2 = () => {
    navigate("track-orders");
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between border">
        <Heading title="Orders" tclass="text-xl font-medium" />

        <Choose
          className="items-center gap-x-4"
          text1="Export"
          text2="Track Orders"
          sharedStyle="btn--primary btn-sm rounded-[8px] font-semibold"
          handle2={handle2}
        />
      </div>

      <Routes>
        <Route path="/order" element={<OrderIndex />} />
        <Route path="/track-orders" element={<TrackOrder />} />
      </Routes>
    </div>
  );
};

export default Order;
