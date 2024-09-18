import React from "react";
import { nav_links } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const ManageSideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden w-[15rem] bg-white shadow-2xl min-h-[296px] list-none md:flex flex-col gap-y-4">
      {nav_links.map((item) => {
        const isActive = item.href === pathname;
        return (
          <Link to={item.href} key={item.title} className={`${item.title === 'WishList' && 'hidden'} ${item.title === 'Logout' && 'hidden'}`}>
            <li
              className={`flex items-center gap-x-2 h-9 pl-5 ${
                isActive && "bg-active"
              }`}
            >
              <div>
                <img src={item.icon} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </li>
          </Link>
        );
      })}
    </nav>
  );
};

export default ManageSideBar;
