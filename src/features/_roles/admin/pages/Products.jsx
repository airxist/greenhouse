import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductIndex from "./ProductIndex";
import AddProduct from "../../shared-pages/AddProduct";

const Products = () => {
  return (
    <div className="px-8 py-8 border-4">
      <Routes>
        <Route index element={<ProductIndex />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Products;
