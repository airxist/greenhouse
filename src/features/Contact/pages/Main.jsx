import React from "react";

const Main = () => {
  return (
    <section className="px-5 md:px-[112px]">
      <div className="flex flex-col-reverse md:flex-row items-start pt-11 pb-5">
        <div className="w-full md:w-3/12">
          <h2 className="font-bold text-[28px]">Our Contacts</h2>

          <div className="mt-6">
            <div>
              <p className="text-xl font-medium">Working hours</p>
              <p>24hrs Mon - Sat</p>
            </div>
            <div>
              <p className="text-xl font-medium">Email</p>
              <p>Fysi@gmail.components</p>
            </div>
            <div>
              <p className="text-xl font-medium">Phone</p>
              <p>+23481000000009</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-9/12 h-[241px] md:h-[515px]">
          <img
            src="/hero_bg/home_bg.jpg"
            alt="contact"
            className="size-full rounded-[8px] object-center object-cover"
          />
        </div>
      </div>

      <div className="min-h-[600px]">
        <h2 className="font-bold text-xl md:text-[28px]">
          Follow us on our social platforms
        </h2>

        <div className="md:flex items-center mt-5">

          <div className="w-full md:w-1/2 min-h-full flex">

            <div className="w-1/2 min-h-[300px] md:min-h-[500px]  h-full">
              <img
                src="/accessories/bag2.jpg"
                alt=""
                className="h-[182px] md:h-[317px] w-full"
              />
            </div>

            <div className="w-1/2 min-h-[300px] md:min-h-[500px]  h-full flex flex-col justify-end">
              <img
                src="/accessories/bag2.jpg"
                alt=""
                className="h-[182px] md:h-[317px] w-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full flex">
            <div className="w-1/2 min-h-[300px] md:min-h-[500px]  h-full">
              <img
                src="/accessories/bag2.jpg"
                alt=""
                className="h-[182px] md:h-[317px] w-full"
              />

              <div>
                <p>Insta</p>
                <p>Insta</p>
                <p>Insta</p>
              </div>
            </div>
            <div className="w-1/2 min-h-[300px] md:min-h-[500px]  h-full flex flex-col justify-end">
              <img
                src="/accessories/bag2.jpg"
                alt=""
                className="h-[182px] md:h-[317px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
