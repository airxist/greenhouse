import React from "react";
import Hamburger from "../../assets/svg/Hamburger";
import Logo from "../../assets/svg/Logo";
import Cart from "../../assets/svg/Cart";
import SearchBar from "./SearchBar";

const MobileHeader = () => {
  return (
    <header className="md:hidden border px-[15px] py-[30px]">
      <div className="flex items-center justify-between h-14 border">
        <div className="flex items-center justify-between w-[153px]">
          <Hamburger />
          <Logo />
        </div>

        <div>
          <Cart size={24} />
        </div>
      </div>

      <SearchBar className="h-9 w-full rounded-md bg-foundation relative border overflow-hidden mt-6" />
    </header>
  );
};

export default MobileHeader;
