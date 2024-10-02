import React, { useState } from "react";
import Btn from "../../../../shared/components/Btn";
import Tag from "./Tag";

const ToggleOptions = ({ className, options }) => {
  const [toggleOptions, setToggleOptions] = useState(options);

  const changeOption = (title) => {
    setToggleOptions((prev) => {
      return prev.map((item) =>
        item.title === title
          ? { ...item, show: true }
          : { ...item, show: false }
      );
    });
  };

  return (
    <div className={`toggler ${className}`}>
      {toggleOptions.map((item) => {
        return (
          <Btn
            text={item.title}
            icon={
              item.digit && (
                <Tag
                  className={`toggle-option__tag ${
                    item.show
                      ? "toggle-option__tag--active"
                      : "toggle-option__tag--inactive"
                  }`}
                  text={item.digit}
                />
              )
            }
            position="right"
            className={`toggle-option ${
              item.show ? "toggle-option--active" : "toggle-option--inactive"
            }`}
            handleClick={() => changeOption(item.title)}
          />
        );
      })}
    </div>
  );
};

export default ToggleOptions;
