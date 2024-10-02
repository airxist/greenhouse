import React from "react";
import SideBar from "../../features/vendor/components/SideBar";
import Header from "../../features/vendor/components/Header";

const VendorLyt = ({ children }) => {
  return (
    <section className="flex">
      <SideBar />
      <div className="w-[81%]">
        <Header />
        {children}
      </div>
    </section>
  );
};

export default VendorLyt;
