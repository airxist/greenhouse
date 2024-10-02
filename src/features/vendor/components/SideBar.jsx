import React from "react";
import Logo from "../../../assets/svg/Logo";
import Hamburger from "../../../assets/svg/Hamburger";
import { vendor_footerlinks, vendor_navlinks } from "../../../constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[19%] h-[1024px] bg-fysi-green py-7">
      <div className="border-b">
        <div className="flex items-center justify-between w-[82%] mx-auto">
          <Logo type={3} />
          <Hamburger color="white" />
        </div>

        <nav className="border my-3 px-2">
          {vendor_navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                to={item.href}
                className="py-3 px-4 rounded-[4px] bg-fysi-green/10 block border"
              >
                <li className="text-white flex items-center gap-x-3">
                  <div>
                    <item.icon color="white" />
                  </div>
                  {item.title}
                </li>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-2">
        <div className="border my-3">
          {vendor_footerlinks.map((item) => {
            return (
              <Link
                key={item.title}
                to={item.href}
                className="py-3 px-4 rounded-[4px] bg-fysi-green/10 block border"
              >
                <li className="text-white flex items-center gap-x-3">
                  <div>
                    <item.icon color="white" />
                  </div>
                  {item.title}
                </li>
              </Link>
            );
          })}
        </div>

        <div className="border py-5 px-4">
          <div className="flex items-center gap-x-3">
            <div className="rounded-full size-10 border"></div>

            <div className="text-white">
              <h3>Alison Eyo</h3>
              <p>alison@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
