import React from "react";

const FormBlock = ({ title, children }) => {
  return (
    <div className="form-block form-block--white form-block--border">
      <p className="form-block__title">{title}</p>
      {children}
    </div>
  );
};

export default FormBlock;
