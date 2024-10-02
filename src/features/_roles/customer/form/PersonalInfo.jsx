import React from "react";
import FormLayout from "./FormLayout";
import FormRow from "../../../../shared/components/FormRow";
import UploadCard from "../../../../shared/components/UploadCard";
import Choose from "../../../../shared/components/Choose";

const PersonalInfo = () => {
  return (
    <FormLayout
      form_title="Personal Info"
      form_desc="Update your photo and personal details."
    >
      <form className="form-block form-block--white mt-8">
        <div className="space-y-6">
          <div className="form-block__col-set form-block--set2">
            <FormRow
              name="firstname"
              label="First name"
              conClass="form-block__col"
              lableClass="form-block__label"
              value=""
              placeholder="Olivia"
              inputClass="form-block__input-field input--sm-hsize mt-[6px]"
            />
            <FormRow
              name="lastname"
              label="Last name"
              conClass="form-block__col"
              lableClass="form-block__label"
              value=""
              placeholder="Last name"
              inputClass="form-block__input-field input--sm-hsize mt-[6px]"
            />
          </div>

          <FormRow
            name="email"
            label="Email Address"
            conClass="form-block__col"
            lableClass="form-block__label"
            value=""
            placeholder="Olivia"
            inputClass="form-block__input-field input--sm-hsize mt-[6px]"
          />

          <div className="md:flex justify-between">
            <div className="size-16 rounded-full border"></div>

            <div className="mt-5 md:mt-0 w-full md:w-[90%]">
              <UploadCard />
            </div>
          </div>
        </div>
        <div className="h-[73px] flex-center">
          <Choose
            className="w-full justify-end gap-x-3"
            text1="Cancel"
            text2="Save Changes"
            sharedStyle="btn-sm text-sm rounded-[8px]"
            style1="btn--neutral"
            style2="btn--primary"
          />
        </div>
      </form>
    </FormLayout>
  );
};

export default PersonalInfo;
