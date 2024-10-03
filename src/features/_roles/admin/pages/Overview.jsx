import Analytics from "../../../../shared/components/_roles/Analytics";
import WelcomeBoard from "../../../../shared/components/_roles/WelcomeBoard";
import BestSellers from "../components/BestSellers";
import SalesProgress from "../components/SalesProgress";
import SalesSummary from "../components/SalesSummary";
import WebsiteHealth from "../components/WebsiteHealth";

const Overview = () => {
  return (
    <div className="px-8 py-8 border-4">
      <WelcomeBoard />
      <Analytics />

      <div className="flex gap-3">
        <SalesProgress />
        <SalesSummary />
      </div>

      <div className="flex gap-4 mt-4">
        <BestSellers />
        <WebsiteHealth />
      </div>
    </div>
  );
};

export default Overview;
