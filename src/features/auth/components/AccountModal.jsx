import React from "react";
import Btn from "../../../shared/components/Btn";
import Heading from "../../../shared/components/Heading";
import { useGlobalAppContext } from "../../../context";

const AccountModal = () => {
  const { setModalContent } = useGlobalAppContext();
  return (
    <>
      <Heading
        conClass="text-center"
        title="Confirm your Account Type"
        tclass="font-medium text-[28px]"
        desc="Kindly validate your account type as once confirmed, 
it cannot be changed later"
        dclass="text-office-brown"
      />

      <div className="text-center mt-3 md:mt-12 flex flex-col gap-y-3 md:gap-y-12">
        <p>
          <span className="text-fysi-green">Individual:</span> If you are a
          seller without any registered or incorporated company.
        </p>
        <p>
          <span className="text-fysi-green">Business:</span> If you are a seller
          without any registered or incorporated company.
        </p>
      </div>

      <Btn text="Submit" className="auth-btn auth-primary-btn mt-20" handleClick={() => setModalContent('congrats')} />
    </>
  );
};

export default AccountModal;
