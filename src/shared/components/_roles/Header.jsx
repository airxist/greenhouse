import Home from "../../../assets/svg/Home";
import Bell from "../../../assets/svg/Bell";
import Btn from "../Btn";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="px-8 w-full border-8">
      <div className="h-16 border flex items-center">
        <div className="border w-[92%] flex items-center gap-x-10 h-10">
          <Btn text="Home" icon={<Home />} className="flex items-center" />
          <SearchBar color="black" className="h-full w-[51%]" />
        </div>
        <div className="flex items-center justify-between w-[8%]">
          <div>
            <Bell />
          </div>

          <div className="size-8 rounded-full bg-red-500"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
