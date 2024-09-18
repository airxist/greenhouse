import React from "react";
import MHeader from "../components/MHeader";
import Footer from "../components/Footer";
import ManageSideBar from "../pages/management/DestopNav";
import MobileNav from '../components/MobleNav'

const ManageLayout = ({ children }) => {
  return (
    <section>
      <MobileNav />
      <MHeader />
      <div className="px-4 md:px-8 lg:px-[112px] py-8 flex gap-5 2xl:gap-10 items-start">
        <ManageSideBar />
        <div className="w-full max-w-[949px] h-36 flex-center border-8">
          {children}
        </div>
      </div>
      <div className="h-40 w-full border-8 flex-center bg-orange-400">
        <h1 className="text-xl">Image</h1>
      </div>
      <Footer />
    </section>
  );
};

export default ManageLayout;
