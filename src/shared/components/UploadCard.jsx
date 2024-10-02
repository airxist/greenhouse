import React from "react";

const UploadCard = () => {
  return (
    <div className="card-upload">
      <div className="card-upload__box">
        <div className="card-upload__icon"></div>

        <div className="mt-3">
          <div>
            <p className="card-upload__text">
              <span className="card-upload__text--green">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-center text-gray-300 mt-[2px]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
