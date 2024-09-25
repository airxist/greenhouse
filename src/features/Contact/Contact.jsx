import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import Returns from "./pages/Returns";
// import NotFound from "../not-found/NotFound";

const Contact = () => {
  return (
    <ReusablesLyt>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/returns" element={<Returns />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ReusablesLyt>
  );
};

export default Contact;
