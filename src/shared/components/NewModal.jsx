import React, { useState } from "react";

const NewModal = ({ trigger: Trigger, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <span onClick={toggleModal}>{Trigger}</span>

      {isModalOpen && (
        <section
          onClick={() => setIsModalOpen(false)}
          className="h-screen w-full bg-black fixed top-0 left-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[600px] h-[300px]"
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default NewModal;
