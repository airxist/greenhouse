import Btn from "../components/Btn";
import Arrow from "../../assets/svg/Arrow";

export const DropDownTrigger = ({
  children,
  className,
  indicator = true,
  rotate,
  handleClick,
}) => {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
      {indicator && (
        <div
          className={`transition-all duration-300 ${rotate && "rotate-180"}`}
        >
          <Arrow color="white" type="down" />
        </div>
      )}
    </div>
  );
};

export const DropDownListItem = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const DropDown = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
