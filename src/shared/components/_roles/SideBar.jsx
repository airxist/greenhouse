import React from "react";
import { customer_navlinks } from "../../../constants";
import { Link } from "react-router-dom";
import FooterProfile from "../FooterProfile";
import SideBarFooterLinks from "../SideBarFooterLinks";
import VendorNav from "../../../features/_roles/vendor/components/VendorNav";
import Hamburger from "../../../assets/svg/Hamburger";
import Logo from "../../../assets/svg/Logo";
import AdminNav from "../../../features/_roles/admin/components/AdminNav";

const SideBar = ({ type = "customer" }) => {
  const CustomerSideBar = () => {
    return (
      <div className="hidden md:block w-[20%] border bg-white">
        <nav className="list-none flex flex-col gap-y-4">
          {customer_navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                to={item.href}
                className="hover:bg-foundation"
              >
                <li className="py-2 px-4">
                  <div className="flex items-center gap-x-3">
                    <item.icon />
                    <p className="text-sm">{item.title}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </nav>
      </div>
    );
  };

  const OtherSideBar = () => {
    return (
      <div className="sidebar sidebar--green">
        <div className="border-b">
          <div className="flex items-center justify-between w-[82%] mx-auto">
            <Logo type={3} />
            <Hamburger color="white" />
          </div>

          {type === "vendor" ? <VendorNav /> : <AdminNav />}
        </div>

        <div className="px-2">
          <SideBarFooterLinks />

          <FooterProfile />
        </div>
      </div>
    );
  };

  return type === "customer" ? CustomerSideBar() : OtherSideBar();
};

export default SideBar;
