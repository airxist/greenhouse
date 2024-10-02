import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const Analytics = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6 my-6">
      <AnalyticsCard
        title="Total Revenue"
        analytics_digit="75,000"
        percent={50}
      />
      <AnalyticsCard
        title="Product SKU"
        analytics_digit="75,000"
        percent={-50}
      />
      <AnalyticsCard
        title="Total Revenue"
        analytics_digit="75,000"
        percent={0}
      />
      <AnalyticsCard
        title="Total Revenue"
        analytics_digit="75,000"
        percent={50}
      />
    </div>
  );
};

export default Analytics;
