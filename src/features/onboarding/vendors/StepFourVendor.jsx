import Btn from "../../../shared/components/Btn";
import FormRow from "../../../shared/components/FormRow";
import HeadDesc from "../../../shared/components/auth/HeadDesc";

const StepFourVendor = ({goToNext}) => {
  return (
    <div className="w-full md:w-[507px]">
      <HeadDesc
        title="Personal Details"
        tClass="font-bold text-center"
        desc="Set up your pass word and provide your phone number"
      />

      <form className="mt-6">
        <div className="flex flex-col gap-y-4">
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Phone number"
            name="phone"
            value="08088883"
            placeholder="your name first"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            label="Password"
            type="password"
            name="lastname"
            value="Ofurum"
            placeholder="last"
          />
          <FormRow
            conClass="auth-con"
            inputClass="auth-input"
            type="password"
            label="Confirm Password"
            name="Phone number"
            value="0818388388"
            placeholder="Email or phone"
          />
        </div>

        <div>
          <p className="text-xs">
            Password should contain at least 8 characters containing a capital
            letter, a lower letter, a number and a special character
          </p>
        </div>

        <Btn
          // href="/authentication/account"
          text="Next"
          className="auth-btn auth-primary-btn mt-8"
          handleClick={goToNext}
        />
      </form>
    </div>
  );
};

export default StepFourVendor;
