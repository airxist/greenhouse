import React from "react";
import { Link } from "react-router-dom";

const MyPicture = () => {
  return (
    <div className="card-account card-picture">
      <div className="w-[50%] min-h-[136px] border flex flex-col items-center justify-between">
        <div className="card-picture__user"></div>
        <div className="text-center">
          <p className="card-picture__text">Airxistence</p>
          <Link className="card-picture__link">View Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default MyPicture;
