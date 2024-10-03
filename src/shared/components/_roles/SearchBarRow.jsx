import Btn from "../Btn";
import FilterIcon from "../../../assets/svg/FilterIcon";
import SearchBar from "../SearchBar";

const SearchBarRow = ({ className }) => {
  return (
    <div className={`flex-spread ${className}`}>
      <SearchBar
        className="w-full max-w-[375px] h-9"
        color="black"
        placeholder="Search"
      />

      <div className="flex items-center gap-x-2">
        <Btn text="Select Date" className="btn-sm btn--neutral rounded-[8px]" />

        <Btn
          icon={<FilterIcon />}
          className="btn-sm btn--neutral rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default SearchBarRow;
