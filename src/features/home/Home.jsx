import React from "react";
import ReusablesLyt from "../../shared/lyt/ReusablesLyt";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Sustainability from "./sections/Sustainability";
import ShowCase from "./sections/ShowCase";
import NewsIn from "./sections/NewsIn";

const Home = () => {
  return (
    <ReusablesLyt>
      <Hero />
      <Offer />
      <ShowCase />
      <Sustainability />
      <NewsIn />
    </ReusablesLyt>
  );
};

export default Home;
