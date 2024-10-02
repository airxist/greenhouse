import React from "react";
import FormLayout from "./FormLayout";
import Choose from "../../../../shared/components/Choose";
import FormRow from "../../../../shared/components/FormRow";

const Password = () => {
  return (
    <FormLayout
      form_title="Password"
      form_desc="Please enter your current password to change your password."
    >
      <div className="card-bill__divider" />

      <form className="form-block form-block--white mt-8">
        <div>
          <FormRow
            name="email"
            label="Email Address"
            conClass="form-block__col md:form-block__row my-10"
            lableClass="form-block__label"
            value=""
            placeholder="Olivia"
            inputClass="form-block__input-field input--sm-hsize w-full md:w-[50%]"
          />
          <FormRow
            name="email"
            label="Email Address"
            conClass="form-block__col md:form-block__row my-10"
            lableClass="form-block__label"
            value=""
            placeholder="Olivia"
            inputClass="form-block__input-field input--sm-hsize w-full md:w-[50%]"
          />
          <FormRow
            name="email"
            label="Email Address"
            conClass="form-block__col md:form-block__row my-10"
            lableClass="form-block__label"
            value=""
            placeholder="Olivia"
            inputClass="form-block__input-field input--sm-hsize w-full md:w-[50%]"
          />
        </div>
        <div className="h-[73px] flex-center">
          <Choose
            className="w-full justify-end gap-x-3"
            text1="Cancel"
            text2="Update Password"
            sharedStyle="btn-sm text-sm rounded-[8px]"
            style1="btn--neutral"
            style2="btn--primary"
          />
        </div>
      </form>
    </FormLayout>
  );
};

export default Password;
