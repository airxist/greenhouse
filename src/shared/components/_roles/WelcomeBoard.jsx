import DateDisplay from "../../../features/_roles/vendor/components/DateDisplay";
import Heading from "../Heading";

const WelcomeBoard = () => {
  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Welcome Psalmuhel Tech Hub"
        tclass="text-xl font-medium"
        desc="Take a look at all your report at a glance!"
        dclass="text-sm text-gray-400"
      />

      <DateDisplay />
    </div>
  );
};

export default WelcomeBoard;
