import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import { about_pages } from "../../constants";
import Brief from "./components/Brief";
import Testimonials from "./components/Testimonials";

const About = () => {
  return (
    <ReusablesLyt>
      <div className="px-5 md:px-[112px]">
        {about_pages.map((item) => {
          return <Brief key={item.title} {...item} className={item.className} />;
        })}
      </div>
      <Testimonials />
    </ReusablesLyt>
  );
};

export default About;
