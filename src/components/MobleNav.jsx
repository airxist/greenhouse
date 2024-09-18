import React from "react";
import Btn from "./Btn";
import Cart from "./svgs/Cart";
import Bar from "./svgs/Bar";
import Logo from "./Logo";
import { nav_links } from "../constants";
import { Link } from "react-router-dom";
import Cancel from "./svgs/Cancel";
import { useGlobalContext } from "../context";

const NavGroup = ({ links, label, color }) => {
  return (
    <div>
      {label && (
        <div>
          <p>{label}</p>
        </div>
      )}

      <ul className="flex flex-col gap-y-4 mt-2">
        {links.map((item) => {
          // const isActive = item.href === pathname;
          const show = item.title !== "Settings" && item.title !== "Logout";
          return (
            <Link
              to={item.href}
              key={item.title}
              className={`${show ? "block" : "hidden"}`}
            >
              <li
                className={`flex items-center gap-x-3 h-9 px-4 py-2 ${
                  color ? "text-white" : "text-red-500"
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
      </ul>
    </div>
  );
};

const MobleNav = ({ color }) => {
  const {
    openNav,
    nav_open,
    nav_close,
    nav_toggle: toggle_nav,
  } = useGlobalContext();

  const user = {
    name: "Michael Smith",
  };

  const ColouredNav = () => {
    return (
      <div className="block md:hidden">
        <header className="px-4 py-4 bg-black/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Btn
                icon={<Bar size={24} color="green" />}
                classname="bg-transparent"
                handleClick={nav_open}
              />
              <Logo />
            </div>
            <Btn icon={<Cart />} classname="bg-transparent" />
          </div>

          <div className="mt-[18px]">
            <h1 className="font-medium">{user.name}</h1>
          </div>
        </header>

        <div
          className={`bg-green transform transition-all duration-1000 absolute top-0 left-0 w-full ${
            openNav ? "show" : "hide"
          }`}
        >
          <div className="flex items-center justify-between px-4 pt-7">
            <div className="flex items-center gap-x-2">
              <Logo color="white" />
            </div>
            <Btn
              icon={<Cancel />}
              classname="bg-transparent"
              handleClick={nav_close}
            />
          </div>

          <nav className="w-full min-h-screen md:flex flex-col gap-y-4 mt-10  ">
            <NavGroup links={nav_links} />
          </nav>
        </div>
      </div>
    );
  };

  const Nav = () => {
    return (
      <div className="block md:hidden">
        <header className="px-4 py-4 bg-black/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Btn
                icon={<Bar size={24} color="black" />}
                classname="bg-transparent"
                handleClick={toggle_nav}
              />
              <Logo />
            </div>
            <Btn icon={<Cart />} classname="bg-transparent" />
          </div>

          <div className="mt-[18px]">
            <h1 className="font-medium">{user.name}</h1>
          </div>
        </header>

        <nav
          className={`w-full min-h-screen duration-1000 transition-all bg-white md:flex flex-col gap-y-4  absolute ${
            openNav ? "show" : "hide"
          }`}
        >
          <NavGroup links={nav_links} />
        </nav>
      </div>
    );
  };

  return color ? ColouredNav() : Nav();
};

export default MobleNav;
