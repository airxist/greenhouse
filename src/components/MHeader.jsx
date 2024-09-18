import React from "react";
import Logo from "./Logo";
import Bar from "./svgs/Bar";
import { manage_links } from "../constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Btn from "./Btn";
import Heart from "./svgs/Heart";
import Cart from "./svgs/Cart";

const MHeader = () => {
  return (
    <header className="hidden md:block">
      <div className="bg-[#002C17] h-12 px-8 lg:px-[112px] flex items-center justify-between">
        <p className="text-white font-medium">8585858585</p>

        <div className="text-white flex-center divide-x-2">
          <p className="pr-6">Get 50% off of selected items</p>
          <p className="pl-6">Sell on Fysi</p>
        </div>

        <div className="w-2 h-2" />
      </div>

      <div className="px-8 lg:px-[112px] h-[92px] flex items-center justify-between">
        <div className="w-3/12 lg:w-4/12">
          <Logo />
        </div>

        <div className="flex items-center justify-between gap-x-10 w-9/12 lg:w-8/12">
          <div>
            <Bar size={24} color="red" />
          </div>

          <div className="hidden lg:flex items-center gap-x-[30px]">
            {manage_links.map((item) => {
              const isDropdown = item.dropdown;
              return isDropdown ? (
                <button>{item.title}</button>
              ) : (
                <Link to={item.href}>
                  <p className="text-base">{item.title}</p>
                </Link>
              );
            })}
          </div>

          <SearchBar />

          <div className="flex items-center gap-x-4">
            <Btn
              text="Wishlist"
              icon={<Heart />}
              classname="bg-transparent flex-center gap-x-1"
            />
            <Btn
              text="Cart"
              icon={<Cart />}
              classname="bg-transparent flex-center gap-x-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MHeader;
