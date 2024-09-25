import { Link } from "react-router-dom";

const Btn = ({ className, text, handleClick, href, icon, position = 'left' }) => {
  const Button = () => {
    return (
      <button className={className} onClick={handleClick}>
        {position === 'left' && icon}
        {text}
        {position === 'right' && icon}
      </button>
    );
  };

  const ButtonAsLink = () => {
    return (
      <Link to={href} className={className}>
        {icon}
        {text}
      </Link>
    );
  };

  return href ? ButtonAsLink() : Button();
};

export default Btn;
