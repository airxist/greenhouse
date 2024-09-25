import Heading from "./Heading";
import Sms from "../../svg/Sms";
import Btn from "./Btn";

const SubScribe = () => {
  return (
    <div className="rounded-[8px] w-full max-w-[615px] h-[329px] md:h-[226px] bg-fysi-green/[77%] px-10 py-8">
      <Heading
        title="Subscribe to our newsletter"
        tclass="font-bold text-xl text-foundation"
        desc="Be the first to know about exclusive offers, eco-tips, and new arrivals!"
        dclass="text-xl text-foundation mt-7"
      />

      <div className="mt-5 w-full max-w-[371px] min-h-9 relative rounded-md flex flex-col md:flex-row gap-y-2 md:gap-y-0">

        <div className="relative bg-foundation-grey h-9 flex items-center rounded-md w-full md:[calc(100%-109px)]">
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <Sms />
          </div>

          <input
            type="text"
            name="email"
            placeholder="Your email"
            className="pl-10 bg-transparent"
          />
        </div>

        <Btn
          text="Subscribe"
          className="w-full md:w-[109px] h-9 flex-center rounded-md primary-btn text-white ml-auto"
        />
      </div>
    </div>
  );
};

export default SubScribe;
