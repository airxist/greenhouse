import React from "react";
import { customer_navlinks } from "../../../../constants";
import { Link } from "react-router-dom";

const SideBar = () => {
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

export default SideBar;
