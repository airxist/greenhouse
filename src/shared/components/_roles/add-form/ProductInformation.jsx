import FormBlock from "../FormBlock";
import FormRow from '../../FormRow'

const ProductInformation = () => {
  return (
    <FormBlock title="Product Information">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-x-[47px]">
          <FormRow
            name="name"
            label="Name"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Name of Product"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="category"
            label="Category"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Select"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[47px]">
          <FormRow
            name="brand"
            label="Brand"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Brand"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="color"
            label="Color"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Select Color"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-[47px]">
          <FormRow
            name="descrption"
            label="Product Description"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Enter a description..."
            inputClass="input--big-hsize form-block__input-field"
            formRowType="textarea"
          />
          <FormRow
            name="weight"
            label="Weight(kg)"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter weight"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>
      </div>
    </FormBlock>
  );
};

export default ProductInformation;
