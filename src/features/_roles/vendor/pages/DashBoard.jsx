import Heading from "../../../../shared/components/Heading";
import DateDisplay from "../components/DateDisplay";
import Analytics from "../components/Analytics";

const DashBoard = () => {
  return (
    <div className="px-8 border-8">
      <div className="flex items-center justify-between">
        <Heading
          title="Welcome Psalmuhel Tech Hub"
          tclass="text-xl font-medium"
          desc="Take a look at all your report at a glance!"
          dclass="text-sm text-gray-400"
        />

        <DateDisplay />
      </div>

      <Analytics />
    </div>
  );
};

export default DashBoard;
