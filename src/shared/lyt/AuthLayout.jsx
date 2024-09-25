import React from "react";
import { useGlobalAppContext } from "../../context";
import Overlay from "../../features/auth/components/Overlay";

const AuthLayout = ({ type, children }) => {
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
          alt={type}
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

export default AuthLayout;
