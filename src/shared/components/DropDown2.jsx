import { useState } from "react";
import {
  DropDown,
  DropDownListItem,
  DropDownTrigger,
} from "../ui/DropDownMenu";
import Btn from "./Btn";

const DropDown2 = ({
  lists,
  itemComponent: ItemComponent,
  containerClass,
  trigger,
  triggerClass,
  listClass,
}) => {
  const [show, SetShow] = useState(false);

  return (
    <DropDown className={containerClass}>
      <DropDownTrigger
        className={triggerClass}
        rotate={show}
        handleClick={() => SetShow(!show)}
      >
        {trigger ? trigger : <Btn text="Open" />}
      </DropDownTrigger>

      {show && (
        <div>
          {lists.map((item, index) => {
            return (
              <DropDownListItem key={index} className={listClass}>
                <ItemComponent {...item} />
              </DropDownListItem>
            );
          })}
        </div>
      )}
    </DropDown>
  );
};

export default DropDown2;
