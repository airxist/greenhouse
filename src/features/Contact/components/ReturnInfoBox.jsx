import React from "react";

const ReturnInfoBox = ({ info }) => {
  const { title, desc, steps } = info;
  return (
    <div>
      <h2 className="font-bold text-[28px]">{title}</h2>
      <p>{desc}</p>
      {steps && (
        <ul>
          {steps.map((step) => {
            return <li key={step}>{step}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ReturnInfoBox;
