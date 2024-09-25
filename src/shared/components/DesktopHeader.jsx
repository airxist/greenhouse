import Call from "../../assets/svg/Call";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context";
import Logo from "../../assets/svg/Logo";
import { desktop_links } from "../../constants";
import Btn from "./Btn";
import SearchBar from "./SearchBar";
import Heart from "../../assets/svg/Heart";
import Cart from "../../assets/svg/Cart";
import DropDown from "./DropDown";

const DesktopHeader = () => {
  const { setRegisterAs, setCategory } = useGlobalAppContext();
  const navigate = useNavigate();

  return (
    <header className="hidden md:block">
      <div className="flex items-center justify-between bg-fysi-green h-12 px-[112px]">
        <div className="flex-center">
          <div>
            <Call />
          </div>
          <p className="text-white">+09112312345</p>
        </div>

        <div className="flex items-center text-white divide-x-2">
          <p className="pr-2">Get 50% off selected items</p>
          <Link
            to="/authentication"
            className="pl-2"
            onClick={() => setRegisterAs("vendor")}
          >
            Sell on fysi
          </Link>
        </div>

        <div />
      </div>

      <div className="h-[92px] bg-white flex items-center px-[112px] gap-x-10">
        <div className="min-w-[108px]">
          <Logo />
        </div>

        <div className="w-11/12 flex items-center justify-between">
          <div className="flex items-center gap-x-[30px]">
            {desktop_links.map((link) => {
              const isLink = link.href;
              return isLink ? (
                <Link key={link.title} to={link.href}>
                  {link.title}
                </Link>
              ) : (
                <DropDown
                  text={link.title}
                  key={link.title}
                  selections={link.selections}
                  dropDownClass={link.dropDownClass}
                  dropDownFunction={(item) => {
                    if (link.title === "Catalogue") {
                      setCategory(item.title);
                      navigate(`/categories/${item.title}`);
                    }

                    if (link.title === "Support") {
                      navigate("/support");
                    }
                  }}
                />
              );
            })}
          </div>

          <SearchBar
            className="relative w-[347px] flex items-center"
            showBtn={true}
          />

          <div className="w-[253px] flex items-center justify-between">
            <Link
              to="/authentication"
              onClick={() => setRegisterAs("customer")}
            >
              Sign Up
            </Link>

            <Btn
              text="WishList"
              icon={<Heart />}
              className="flex items-center gap-x-1"
            />

            <Btn
              text="Cart"
              icon={
                <div className="relative">
                  <span className="quantity">3</span>
                  <Cart />
                </div>
              }
              className="flex items-center gap-x-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
