import FormRow from "../../../../../shared/components/FormRow";
import FormBlock from "../../../../../shared/components/vendor/FormBlock";

const Specification = () => {
  return (
    <FormBlock title="Product Specification">
      <div className="space-y-6">
        <div className="form-block__col-set form-block--set4">
          <FormRow
            name="certifications"
            label="Certifications"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="certifications"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="model"
            label="Model"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Model ID or Manufacturer Part Num."
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="material"
            label="Material Family"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Material Family of product"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="size"
            label="Size(L x W x H cm)"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter size"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>

        <div className="form-block__col-set form-block--set4">
          <FormRow
            name="warranty_duration"
            label="Warranty Duration"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="End Date"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="warranty_type"
            label="Warranty Type"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Select Color"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="product_line"
            label="Product Line"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Select Color"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="notes"
            label="Notes/Comments"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Select Color"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>
      </div>
    </FormBlock>
  );
};

export default Specification;
