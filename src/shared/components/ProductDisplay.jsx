import Remote from "./Remote";
import RegularList from "./RegularList";

const ProductDisplay = ({
  label,
  items,
  resourceName,
  ProductDisplayComponent,
  showRemote,
  wish,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-bold text-[28px]">{label}</p>
        {showRemote && <Remote />}
      </div>

      <div className="display-slider w-full overflow-hidden mt-4">
        <div className="flex gap-x-4 md:gap-x-6">
          <RegularList
            itemsToDisplay={items}
            resourceName={resourceName}
            itemComponent={ProductDisplayComponent}
            wish={wish}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
