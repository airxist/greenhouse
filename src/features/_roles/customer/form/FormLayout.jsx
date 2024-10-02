import React from "react";

const FormLayout = ({ children, form_title, form_desc }) => {
  return (
    <div>
      <div>
        <h3 className="text-[18px] md:text-sm font-bold md:font-medium">{form_title}</h3>
        <p className="text-sm">{form_desc}</p>
      </div>

      {children}
    </div>
  );
};

export default FormLayout;
