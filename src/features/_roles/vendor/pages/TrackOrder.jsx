import React from "react";
import ToggleOptions from "../../customer/components/ToggleOptions";
import { toggle_options } from "../../../../constants";

const TrackOrder = () => {
  return (
    <>
      <ToggleOptions className="mt-8" options={toggle_options.tracking} />
    </>
  );
};

export default TrackOrder;
