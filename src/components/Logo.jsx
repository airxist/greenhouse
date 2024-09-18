import React from "react";
import LogoSvg from "./svgs/LogoSvg";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  const LogoPlain = () => {
    return (
      <Link to="/">
        <LogoSvg />
      </Link>
    );
  };

  const LogoColor = () => {
    return (
      <Link to="/">
        <LogoSvg color={color} />
      </Link>
    );
  };

  return color ? LogoColor() : LogoPlain();
};

export default Logo;
