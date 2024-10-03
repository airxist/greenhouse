import Analytics from "../../../../shared/components/_roles/Analytics";
import WelcomeBoard from "../../../../shared/components/_roles/WelcomeBoard";

const DashBoard = () => {
  return (
    <div className="px-8 border-8">
      <WelcomeBoard />

      <Analytics />
    </div>
  );
};

export default DashBoard;
