import React from "react";

const OtpDigit = ({ input }) => {
  return (
    <div className="size-20 border rounded-lg flex-center">{input || 5}</div>
  );
};

export default OtpDigit;
