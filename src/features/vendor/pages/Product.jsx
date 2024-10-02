import Btn from "../../../shared/components/Btn";
import Heading from "../../../shared/components/Heading";
import SearchBar from "../../../shared/components/SearchBar";
import Analytics from "../components/Analytics";

const Product = () => {
  return (
    <div className="px-8 mt-8">
      <div className="flex items-center justify-between">
        <div>
          <Heading title="Product" tclass="text-xl font-medium" />
          <p>routing &gt; routing</p>
        </div>

        <div className="flex items-center gap-x-4">
          <Btn
            text="Export"
            className="text-white bg-fysi-green flex-center h-9 rounded-[8px] px-2"
          />
          <Btn
            text="Add Product"
            className="text-white bg-fysi-green flex-center h-9 rounded-[8px] px-2"
          />
        </div>
      </div>

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
    </div>
  );
};

export default Product;
