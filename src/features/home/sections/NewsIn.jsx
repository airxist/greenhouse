import ProductDisplay from "../../../shared/components/ProductDisplay";
import newsItem from "../../../mock-data/news.json";
import ProductListItem from "../../../shared/components/ProductListItem";

const NewsIn = () => {
  return (
    <div className="py-6 bg-white pb-5 md:px-[112px] flex flex-col">
      <ProductDisplay
        label="New In"
        items={newsItem}
        resourceName="product"
        ProductDisplayComponent={ProductListItem}
      />
    </div>
  );
};

export default NewsIn;
