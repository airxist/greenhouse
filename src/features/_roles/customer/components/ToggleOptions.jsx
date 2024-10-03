import React, { useState } from "react";
import Btn from "../../../../shared/components/Btn";
import Tag from "./Tag";

const ToggleOptions = ({ className, options, style = 1 }) => {
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

  const Style1 = () => {
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
              className={`toggle-option toggle-option--border ${
                item.show ? "toggle-option--active" : "toggle-option--inactive"
              }`}
              handleClick={() => changeOption(item.title)}
            />
          );
        })}
      </div>
    );
  };

  const Style2 = () => {
    return (
      <div className={`toggler p-1 border rounded-[8px] ${className}`}>
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
              className={`toggle-option toggle-option--bg ${
                item.show ? "toggle-option--active2" : "toggle-option--inactive2"
              }`}
              handleClick={() => changeOption(item.title)}
            />
          );
        })}
      </div>
    );
  };

  return style === 1 ? Style1() : Style2();
};

export default ToggleOptions;
