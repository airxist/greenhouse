import React from "react";
import { useGlobalAppContext } from "../../context";
import Btn from "./Btn";
import Close from "../../svg/Close";
import Heading from "./Heading";
import AccountModal from "../../features/auth/components/AccountModal";
import CongratsModal from "../../features/auth/components/CongratsModal";

const Modal = () => {
  const { modalContent, setModal } = useGlobalAppContext();
  return (
    <div className="modal">
      <div className="modal-main">
        <Btn
          icon={<Close />}
          className="border absolute top-5 right-3 md:right-20"
          handleClick={() => setModal(false)}
        />

        {modalContent === "Account" && <AccountModal />}

        {modalContent === 'congrats' && <CongratsModal />}
      </div>
    </div>
  );
};

export default Modal;
