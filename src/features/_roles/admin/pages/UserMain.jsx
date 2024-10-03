import React from "react";
import NewModal from "../../../../shared/components/NewModal";
import Btn from "../../../../shared/components/Btn";

const UserMain = ({ type }) => {
  return (
    <div className="px-8 py-8">
      user mai {type}
      <NewModal trigger={<Btn text="open" />} />
    </div>
  );
};

export default UserMain;
