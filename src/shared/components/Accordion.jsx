import React, { useState } from "react";
import Arrow from "../../assets/svg/Arrow";
import Btn from "./Btn";

export const AccordionContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const AccordionTrigger = ({
  children,
  className,
  reveal,
  handleReveal,
}) => {
  return (
    <div
      className={`${className} flex items-center justify-between w-full cursor-pointer`}
      onClick={handleReveal}
    >
      {children}

      <div className={`transition-all duration-1000 ${reveal && "rotate-180"}`}>
        <Arrow type="down" />
      </div>
    </div>
  );
};

export const AccordionLabel = ({ label, className }) => {
  return <p className={className}>{label}</p>;
};

export const AccordionBody = ({
  className,
  triggerClass,
  triggerChild,
  content,
  contentClass,
}) => {
  const [reveal, setReveal] = useState(false);

  return (
    <div className={className}>
      <AccordionTrigger
        className={triggerClass}
        handleReveal={() => setReveal(!reveal)}
        reveal={reveal}
      >
        {triggerChild}
      </AccordionTrigger>
      {reveal && (
        <AccordionContent className={contentClass}>{content}</AccordionContent>
      )}
    </div>
  );
};

export const AccordionSheet = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
