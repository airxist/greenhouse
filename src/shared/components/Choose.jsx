import React from "react";
import Btn from "./Btn";

const Choose = ({
  className,
  text1 = "opt1",
  text2 = "opt2",
  style1,
  style2,
  sharedStyle,
  handle1,
  handle2,
}) => {
  return (
    <div className={`flex ${className}`}>
      <Btn
        text={text1}
        className={`${style1} ${sharedStyle}`}
        handleClick={handle1}
      />
      <Btn
        text={text2}
        className={`${style2} ${sharedStyle}`}
        handleClick={handle2}
      />
    </div>
  );
};

export default Choose;
