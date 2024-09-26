import { Link } from "react-router-dom";
import Heart from "../../assets/svg/Heart";

const ProductListItem = ({ product, wish, className }) => {
  const { title, img, price } = product;
  console.log(product);
  return (
    <Link to={`/product-page/${title}`}>
      <div
        className={`${
          className || "w-[189px] md:w-[288px] h-[231px] md:h-[417px]"
        } relative rounded-[8px] overflow-hidden border border-foundation-border`}
      >
        <img
          src={img}
          alt={title}
          className="size-full object-cover object-center"
        />
        {wish && (
          <div className="absolute top-5 right-5 bg-fysi-green size-[50px] rounded-full flex-center">
            <Heart color="white" />
          </div>
        )}
      </div>
      <div className="py-2 rounded-tr-md">
        <p className="text-xs md:text-sm">{title}</p>
        <p className="font-bold text-xs md:text-sm">{price || "#500"}</p>
      </div>
    </Link>
  );
};

export default ProductListItem;
