import Arrow from "../../assets/svg/Arrow";
import Btn from "./Btn";

const Remote = ({ size = "size-6 flex-center" }) => {
  return (
    <div className="flex items-center justify-between w-[78px]">
      <Btn className={`${size} bg-fysi-green rounded-full`} icon={<Arrow />} />
      <Btn
        className={`${size} bg-fysi-green rounded-full`}
        icon={<Arrow type="right" />}
      />
    </div>
  );
};

export default Remote;
