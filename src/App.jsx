import { Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Auth from "./features/auth/Auth";
import { useGlobalAppContext } from "./context";
import Modal from "./shared/components/Modal";
import CategoryPage from "./features/category-page/CategoryPage";
import About from "./features/about/About";
import Contact from "./features/Contact/Contact";
import NotFound from "./features/not-found/NotFound";

function App() {
  const { modal } = useGlobalAppContext();
  return (
    <>
      {modal && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/authentication/*" element={<Auth />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
