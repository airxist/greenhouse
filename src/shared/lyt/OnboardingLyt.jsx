import { useGlobalAppContext } from "../../context";
import Overlay from "../../features/onboarding/components/Overlay";

const OnboardingLyt = ({ children }) => {
  const { registerAs } = useGlobalAppContext();
  return (
    <section className="flex items-start">
      <div className="hidden md:block w-[636px] h-screen relative">
        <img
          src={
            registerAs === "customer"
              ? "/customer-onboarding.jpg"
              : "/vendor-onboarding.jpg"
          }
          alt={registerAs}
          className="size-full object-center object-cover"
        />
        {registerAs === "vendor" && <Overlay />}
      </div>
      <div className="px-5 md:px-[115px] w-full md:w-1/2 flex-center min-h-screen">
        {children}
      </div>
    </section>
  );
};

export default OnboardingLyt;
