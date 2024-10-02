import { Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import { useGlobalAppContext } from "./context";
import Modal from "./shared/components/Modal";
import CategoryPage from "./features/category-page/CategoryPage";
import About from "./features/about/About";
import Contact from "./features/Contact/Contact";
import NotFound from "./features/not-found/NotFound";
import Onboarding from "./features/onboarding/Onboarding";
import Support from "./features/support/Support";
import Product from "./features/product/Product";
import OrderSummary from "./features/order-summary/OrderSummary";
import Thanks from "./features/thanks/Thanks";
import Vendor from "./features/vendor/Vendor";
import Customer from "./features/customer/Customer";

function App() {
  const { modal } = useGlobalAppContext();
  return (
    <>
      {modal && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/customer/*" element={<Customer />} />
        <Route path="/onboarding/*" element={<Onboarding />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/product-page/:id" element={<Product />} />
        <Route path="/vendor/*" element={<Vendor />} />
        <Route path="/support/*" element={<Support />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
