import { Route, Routes } from "react-router-dom";
import ReusablesLyt from "../../../shared/lyt/ReusablesLyt";
import SideBar from "./components/SideBar";
import Account from "./pages/Account";
import History from "./pages/History";
import Settings from "./pages/Settings";
import WishList from "./pages/WishList";
import Inbox from "./pages/Inbox";
import Reviews from "./pages/Reviews";

const Customer = () => {
  return (
    <ReusablesLyt>
      <div className="px-4 md:px-[112px] my-8 flex gap-x-9">
        <SideBar />
        <div className="border w-full md:w-[80%]">
          <Routes>
            <Route path="/my-account" element={<Account />} />
            <Route path="/order-history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </ReusablesLyt>
  );
};

export default Customer;
