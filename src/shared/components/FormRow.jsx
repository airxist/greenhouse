import React from "react";

const FormRow = ({
  conClass,
  name,
  lableClass,
  label,
  type = "text",
  value,
  placeholder,
  inputClass,
  formRowType = "regular",
}) => {
  const RegularFormRow = () => {
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

  const TextAreaFormRow = () => {
    return <div className={conClass}>
      <label htmlFor={name} className={lableClass}>
        {label}
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        name={name}
        className={inputClass}
        required
      />
    </div>;
  };

  return formRowType === "regular" ? RegularFormRow() : TextAreaFormRow();
};

export default FormRow;
