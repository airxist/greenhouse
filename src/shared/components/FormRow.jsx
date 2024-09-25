import React from "react";

const FormRow = ({
  conClass,
  name,
  lableClass,
  label,
  type = 'text',
  value,
  placeholder,
  inputClass,
}) => {
  return (
    <div className={conClass}>
      <label htmlFor={name} className={lableClass}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={inputClass}
        required
      />
    </div>
  );
};

export default FormRow;
