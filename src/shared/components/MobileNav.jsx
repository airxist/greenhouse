import { Link } from "react-router-dom";
import Hamburger from "../../assets/svg/Hamburger";
import Btn from "./Btn";
import { customer_navlinks } from "../../constants";
import { useState } from "react";

const MobileNav = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <div>
      <Btn
        icon={<Hamburger />}
        handleClick={() => setShowNavLinks(!showNavLinks)}
      />
      {showNavLinks && (
        <div className="mobile-navlinks-container">
          <h3 className="text-[18px] font-medium">Welcome Jogn</h3>

          <nav className="mobile-nav">
            {customer_navlinks.map((item) => {
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="hover:bg-foundation"
                  onClick={() => setShowNavLinks(false)}
                >
                  <li className="py-2 px-4 border">
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
      )}
    </div>
  );
};

export default MobileNav;
