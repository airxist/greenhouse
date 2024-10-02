import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Account from "./pages/Account";
import Discount from "./pages/Discount";
import RoleLayout from "../../../shared/lyt/RoleLayout";

const Vendor = () => {
  return (
    <RoleLayout role="vendor">
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/orders/*" element={<Order />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/discount/*" element={<Discount />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </RoleLayout>
  );
};

export default Vendor;
