import { Route, Routes, useLocation } from "react-router-dom";
import Manage from "./Manage";
import AddProduct from "../../shared-pages/AddProduct";
import Heading from "../../../../shared/components/Heading";
import Choose from "../../../../shared/components/Choose";

const Product = () => {
  const { pathname } = useLocation();

  return (
    <div className="px-8 mt-8">
      <div className="flex items-center justify-between">
        <div>
          {pathname === "/vendor/manage-product" && (
            <Heading title="Product" tclass="text-xl font-medium" />
          )}

          <p>routing &gt; routing</p>
        </div>

        <Choose
          className="items-center gap-x-4"
          text1="Export"
          text2="Add Product"
          sharedStyle="btn--primary btn-sm rounded-[8px] text-sm font-semibold"
        />
      </div>

      <Routes>
        <Route path="/manage-product" element={<Manage />} />
        <Route path="/add-products" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Product;
