import React from "react";

const RegularList = ({
  itemsToDisplay,
  resourceName,
  listItemFunction,
  itemComponent: ItemComponent,
  className,
  wish,
}) => {
  return (
    <>
      {itemsToDisplay.map((item, i) => {
        return (
          <ItemComponent
            key={i}
            {...{
              [resourceName]: item,
              handleFunction: () => listItemFunction(item),
              wish,
              className,
            }}
          />
        );
      })}
    </>
  );
};

export default RegularList;
