import React from "react";
import { Route, Routes } from "react-router-dom";
import Promotion from "./Promotion";
import Monitor from "./Monitor";

const Discount = () => {
  return (
    <div className="py-8 px-8">
      <Routes>
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>
    </div>
  );
};

export default Discount;
