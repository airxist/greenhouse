import Remote from "../../../shared/components/Remote";
import RegularList from "../../../shared/components/RegularList";
import testimonies from "../../../mock-data/testimonies.json";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="px-5 md:px-[112px] py-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[28px]">Testimonial</h2>
        <Remote />
      </div>

      <div className="my-10 md:flex items-center md:gap-x-3 space-y-3 md:space-y-0">
        <RegularList itemsToDisplay={testimonies} itemComponent={Testimony} resourceName="testimony" />
      </div>
    </div>
  );
};

export default Testimonials;
