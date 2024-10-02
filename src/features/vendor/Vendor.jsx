import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Product from "./pages/Product";
// import { Outlet } from "react-router-dom";

const Vendor = () => {
  return (
    <section className="flex">
      <SideBar />
      <div className="w-[81%]">
        <Header />

        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </section>
  );
};

export default Vendor;
