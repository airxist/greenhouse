import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import { Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";

const Support = () => {
  return (
    <ReusablesLyt>
      <Routes>
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </ReusablesLyt>
  );
};

export default Support;
