import Search from "../../assets/svg/Search";
import Btn from "./Btn";

const SearchBar = ({ className, showBtn, color, placeholder = "Search Categories" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Search color={color} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full pl-10"
      />
      {showBtn && (
        <Btn
          text="Search"
          className="bg-fysi-green text-white w-[85px] h-9 flex-center rounded-[4px]"
        />
      )}
    </div>
  );
};

export default SearchBar;
