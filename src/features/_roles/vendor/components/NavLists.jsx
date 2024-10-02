import React from "react";
import { Link } from "react-router-dom";
import DropDown2 from "../../../../shared/components/DropDown2";
import Btn from "../../../../shared/components/Btn";

const NavLists = ({ lists, title, icon: Icon, href }) => {
  const NavListMain = () => {
    return (
      <Link
        to={href}
        className="py-3 px-4 rounded-[4px] bg-fysi-green/10 block border"
      >
        <li className="text-white flex items-center gap-x-3">
          <div>
            <Icon color="white" />
          </div>
          {title}
        </li>
      </Link>
    );
  };

  const NavListDropDown = () => {
    return (
      <DropDown2
        triggerClass="py-3 px-4 rounded-[4px] bg-fysi-green/10 block border"
        trigger={
          <li className="text-white flex items-center gap-x-3">
            <div>
              <Icon color="white" />
            </div>
            {title}
          </li>
        }
        lists={lists}
        itemComponent={Btn}
        listClass="py-3 px-4 rounded-[4px] bg-fysi-green/10 block text-white"
      />
    );
  };

  return lists ? NavListDropDown() : NavListMain();
};

export default NavLists;
