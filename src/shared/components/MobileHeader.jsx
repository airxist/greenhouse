import React from "react";
import Hamburger from "../../assets/svg/Hamburger";
import Logo from "../../assets/svg/Logo";
import Cart from "../../assets/svg/Cart";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const MobileHeader = () => {
  const { pathname } = useLocation();
  const hideSearchBar = pathname.startsWith("/customer");

  return (
    <header className="mobile-header">
      
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center justify-between w-[153px]">
          <MobileNav />
          <Logo />
        </div>

        <div>
          <Cart size={24} />
        </div>
      </div>

      {hideSearchBar ? null : (
        <SearchBar className="h-9 w-full rounded-md bg-foundation relative border overflow-hidden mt-6" />
      )}
    </header>
  );
};

export default MobileHeader;
