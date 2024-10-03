import React from "react";

const AnalyticsCard = ({ title, analytics_digit, percent, icon }) => {
  const positive = percent > 0;

  console.log(positive);
  return (
    <div className="card p-5 border border-foundation-100  rounded-[8px]">
      <div>
        <div className="size-10 flex-center border-4 rounded-full">{icon}</div>

        <div className="mt-4">
          <p className="font-medium">{title}</p>
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl font-medium">{analytics_digit}</h3>

            <div className={`rounded-full flex-center min-w-[45px] h-[22px] ${percent > 0 && 'bg-green-200'} ${percent < 0 &&'bg-red-300'} ${percent === 0 && 'bg-gray-400'}`}>
              <p>
                {positive && "+"}
                {percent}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
