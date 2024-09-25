import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import Btn from "../../shared/components/Btn";
import ProductDisplay from "../../shared/components/ProductDisplay";
import demandItems from '../../mock-data/demand.json'
import ProductListItem from "../../shared/components/ProductListItem";

const NotFound = () => {
  return (
    <ReusablesLyt>
      <div className="px-2 md:px-[112px]">
        <div className="min-h-96 flex flex-col items-center justify-between">
          <h2 className="text-2xl md:text-6xl text-center">OOps!</h2>

          <div className="md-w-[975px] md:h-[415px] md:my-11">
            <img src="/hero_bg/notfound.svg" alt="not found" />
          </div>

          <Btn
            text="Go to Home Page"
            className="rounded-[8px] bg-fysi-green text-white flex-center w-[190px] h-[51px]"
          />
        </div>

        <div className="mt-20">
          <ProductDisplay
            label="Products on Demand"
            items={demandItems}
            resourceName="product"
            ProductDisplayComponent={ProductListItem}
            wish={true}
            showRemote
          />
        </div>
      </div>
    </ReusablesLyt>
  );
};

export default NotFound;
