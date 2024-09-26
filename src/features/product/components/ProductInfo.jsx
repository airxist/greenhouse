import React from "react";
import ProductInfoHeader from "./ProductInfoHeader";
import Xteristics from "./Xteristics";
import Counter from "./Counter";
import Btn from "../../../shared/components/Btn";
import Cart from "../../../assets/svg/Cart";
import Heart from "../../../assets/svg/Heart";
import {
  AccordionBody,
  AccordionSheet,
} from "../../../shared/components/Accordion";

const ProductInfo = () => {
  return (
    <div className="w-full md:w-7/12">
      <ProductInfoHeader />

      <div className="mt-6">
        <p>
          Light up your life sustainably with our bamboo desk lamp, where modern
          design meets eco-friendly materials.
        </p>
        <Xteristics
          xteristics={["Non toxic", "Sustainable", "Biodegradable"]}
        />
      </div>

      <div className="md:flex items-center gap-1 my-6">
        <Counter />
        <div className="flex items-center gap-1 mt-3 md:mt-0">
          <Btn
            text="Add To Cart"
            icon={<Cart />}
            className="w-[276px] md:w-[338px] h-11 bg-fysi-green rounded-[8px] flex-center text-white"
          />

          <Btn
            icon={<Heart />}
            className="flex-center size-[50px] rounded-full bg-foundation-100"
          />
        </div>
      </div>

      <AccordionSheet>
        <AccordionBody
          triggerChild={<Btn text="Eco Certification" />}
          triggerClass=""
          content={<div>Jose</div>}
        />
        <AccordionBody
          triggerChild={<Btn text="Eco Certification" />}
          triggerClass=""
          content={<div>Jose</div>}
        />
      </AccordionSheet>
    </div>
  );
};

export default ProductInfo;
