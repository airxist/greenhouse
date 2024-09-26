import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import Logo from "../../assets/svg/Logo";
import Btn from "../../shared/components/Btn";
import demands from "../../mock-data/demand.json";
import ProductDisplay from "../../shared/components/ProductDisplay";
import ProductListItem from "../../shared/components/ProductListItem";

const Thanks = () => {
  return (
    <ReusablesLyt>
      <section className="px-5 md:px-[112px]">
        <div className="py-10">
          <div className="w-fit mx-auto">
            <Logo type={2} />
          </div>

          <div className="text-center my-3">
            <h2 className="font-bold text-[2rem]">Thank You</h2>
            <p className="font-medium">Your order is being processed</p>
          </div>

          <Btn
            text="Go to Catalogue"
            className="text-white h-14 bg-fysi-green rounded-[8px] flex-center w-[241px] mx-auto"
          />
        </div>

        <div className="py-5">
          <ProductDisplay
            label="Recently Viewed"
            items={demands}
            resourceName="product"
            ProductDisplayComponent={ProductListItem}
            wish={true}
            showRemote
          />
        </div>
      </section>
    </ReusablesLyt>
  );
};

export default Thanks;
