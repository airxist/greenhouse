import Btn from "../../../../shared/components/Btn";
import Heading from "../../../../shared/components/Heading";
import SearchBar from "../../../../shared/components/SearchBar";
import Analytics from "../../../../shared/components/_roles/Analytics";

const Manage = () => {
  return (
    <>
      <Analytics />

      <div>
        <div>
          <p className="text-xl font-medium inline-block">All Products</p>{" "}
          <span className="rounded-[8px] border border-[#8AA698] text-sm py-1 px-2 bg-[#E6ECE9] ml-2">
            172
          </span>
        </div>

        <div className="mt-[14px]">
          <SearchBar className="w-full max-w-[375px] h-9" color="red" />
        </div>
      </div>
    </>
  );
};

export default Manage;
