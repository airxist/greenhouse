import React from "react";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import Palm from "../components/Palm";
import MobileHeader from "../components/MobileHeader";

const ReusablesLyt = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
      {children}
      <Palm />
      <Footer />
    </>
  );
};

export default ReusablesLyt;
