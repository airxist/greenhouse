import FormBlock from "../../../../../shared/components/vendor/FormBlock";
import UploadCard from "../../../../../shared/components/UploadCard";

const UploadImages = () => {
  return (
    <FormBlock title="Upload Product Images">
      <div className="grid grid-cols-3 gap-4 mt-6">
        <UploadCard />
        <UploadCard />
        <UploadCard />
        <UploadCard />
        <UploadCard />
        <UploadCard />
      </div>
    </FormBlock>
  );
};

export default UploadImages;
