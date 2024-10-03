import FormBlock from "../FormBlock";
import FormRow from '../../FormRow'

const Pricing = () => {
  return (
    <FormBlock title="Pricing">
      <div className="space-y-6">
        <div className="form-block__col-set form-block--set2">
          <FormRow
            name="base_price"
            label="Base Price"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter base price"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="sale_price"
            label="Sale Price"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter sales price"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>

        <div className="form-block__col-set form-block--set2">
          <FormRow
            name="start_date"
            label="Sales Start Date"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="End Date"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="end_date"
            label="Sales end date (if any)"
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

export default Pricing;
