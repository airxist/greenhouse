import Btn from "../../Btn";
import FormBlock from "../FormBlock";
import FormRow from '../../FormRow'

const Variants = () => {
  return (
    <FormBlock title="Variants">
      <div>
        <div className="form-block__col-set form-block--set4 my-6">
          <FormRow
            name="variation"
            label="Variation"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="certifications"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="sku"
            label="Seller SKU"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="Model ID or Manufacturer Part Num."
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="barcode"
            label="Barcode"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter barcode"
            inputClass="input--normal-hsize form-block__input-field"
          />
          <FormRow
            name="quatity"
            label="Wuatity"
            conClass="form-block__col"
            lableClass="form-block__label"
            // value
            placeholder="enter product quantity"
            inputClass="input--normal-hsize form-block__input-field"
          />
        </div>

        <Btn
          text="Add Variation"
          className="btn btn--primary text-white rounded-[8px]"
        />
      </div>
    </FormBlock>
  );
};

export default Variants;
