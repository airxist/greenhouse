import React from "react";
import { admin_navlinks } from "../../../../constants";
import NavLists from "../../vendor/components/NavLists";

const AdminNav = () => {
  return (
    <nav className="my-3 px-2">
      {admin_navlinks.map((item) => {
        return <NavLists key={item.title} {...item} />;
      })}
    </nav>
  );
};

export default AdminNav;
