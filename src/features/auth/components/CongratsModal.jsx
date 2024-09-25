import React from "react";
import Congrats from "../../../svg/Congrats";
import Heading from "../../../shared/components/Heading";
import Btn from "../../../shared/components/Btn";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../../context";

const CongratsModal = () => {
  const { setModal } = useGlobalAppContext();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Congrats />
      </div>
      <Heading
        conClass="text-center"
        title="Congratulations"
        tclass="text-2xl text-fysi-green font-medium"
        desc="Your shop is ready"
      />

      <Btn
        text="Go To DashBoard"
        className="auth-btn auth-primary-btn mt-20"
        handleClick={() => {
          setModal(false);
          navigate("/");
        }}
      />
    </div>
  );
};

export default CongratsModal;
