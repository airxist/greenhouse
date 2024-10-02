import Calendar from "../../../assets/svg/Calendar";

const DateDisplay = () => {
  return (
    <div className="rounded-[12px] h-[72px] flex-center border border-[#E4E7EC] px-5">
      <div className="flex items-center gap-x-3">
        <div className="size-10 flex-center rounded-full bg-gray-300">
          <Calendar />
        </div>

        <div>
          <p className="text-xs">Today's Date</p>
          <p className="font-bold">1st July, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default DateDisplay;
