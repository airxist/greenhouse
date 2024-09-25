import React from "react";

const Star = ({ type = 1 }) => {
  const Star1 = () => {
    return (
      <svg
        width="287"
        height="260"
        viewBox="0 0 287 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M177.723 0L225.463 128.099L354.48 175.5L225.463 222.901L177.723 351L129.983 222.901L0.966553 175.5L129.983 128.099L177.723 0Z"
          fill="#DEFE1C"
          fill-opacity="0.3"
        />
      </svg>
    );
  };

  const Star2 = () => {
    return (
      <svg
        width="39"
        height="44"
        viewBox="0 0 39 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 0L21.8017 14.008L30.9618 4.20163L25.5258 17.0607L38.0456 15.2016L26.9483 22L38.0456 28.7984L25.5258 26.9393L30.9618 39.7984L21.8017 29.992L19.5 44L17.1983 29.992L8.03819 39.7984L13.4742 26.9393L0.954397 28.7984L12.0517 22L0.954397 15.2016L13.4742 17.0607L8.03819 4.20163L17.1983 14.008L19.5 0Z"
          fill="#DEFE1C"
        />
      </svg>
    );
  };

  return type === 1 ? Star1() : Star2();
};

export default Star;
