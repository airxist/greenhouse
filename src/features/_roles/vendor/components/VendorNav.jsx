import {  vendor_navlinks } from "../../../../constants";
import NavLists from "./NavLists";

const VendorNav = () => {
  return (
    <nav className="border my-3 px-2">
      {vendor_navlinks.map((item) => {
        return <NavLists key={item.title} {...item} />;
      })}
    </nav>
  );
};

export default VendorNav;
