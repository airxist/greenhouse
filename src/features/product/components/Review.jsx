import React from "react";

const Review = ({ review }) => {
  const { reviewText, time, name, rating } = review;
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="size-10 rounded-full">
            <img src="/avatar/grace.svg" alt={name} />
          </div>
          <div>
            <p>{name}</p>
            <p>{rating}</p>
          </div>
        </div>

        <p>{time || "2 mins ago"}</p>
      </div>
      <div className="mt-3">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
