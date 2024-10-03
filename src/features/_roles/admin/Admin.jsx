import { Route, Routes } from "react-router-dom";
import RoleLayout from "../../../shared/lyt/RoleLayout";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

const Admin = () => {
  return (
    <RoleLayout role="admin">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Users />} />
        <Route path="/vendors" element={<Users type="vendors" />} />
      </Routes>
    </RoleLayout>
  );
};

export default Admin;
