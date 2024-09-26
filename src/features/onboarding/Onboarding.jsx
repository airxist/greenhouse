import { useState } from "react";
import OnboardingForm from "./components/OnboardingForm";
import OnboardingLyt from "../../shared/lyt/OnboardingLyt";
import { useGlobalAppContext } from "../../context";
// customer
import StepOneCustomer from "./customers/StepOneCustomer";
import StepTwoCustomer from "./customers/StepTwoCustomer";
import StepThreeCustomer from "./customers/StepThreeCustomer";
import StepFourCustomer from "./customers/StepFourCustomer";
// vendor
import StepOneVendor from './vendors/StepOneVendor';
import StepTwoVendor from './vendors/StepTwoVendor';
import StepThreeVendor from './vendors/StepThreeVendor';
import StepFourVendor from './vendors/StepFourVendor';
import StepFiveVendor from './vendors/StepFiveVendor';

const Onboarding = () => {
  const { registerAs } = useGlobalAppContext();

  const [onboardingData, setOnboardingData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <OnboardingLyt>
      {registerAs === "customer" ? (
        <OnboardingForm currentIndex={currentIndex} onNext={onNext}>
          <StepOneCustomer />
          <StepTwoCustomer />
          <StepThreeCustomer />
          <StepFourCustomer />
        </OnboardingForm>
      ) : (
        <OnboardingForm
          currentIndex={currentIndex}
          onNext={onNext}
        >
          <StepOneVendor />
          <StepTwoVendor />
          <StepThreeVendor />
          <StepFourVendor />
          <StepFiveVendor />
        </OnboardingForm>
      )}
    </OnboardingLyt>
  );
};

export default Onboarding;
