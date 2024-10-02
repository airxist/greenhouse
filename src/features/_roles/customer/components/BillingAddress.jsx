import React from "react";

const BillingAddress = () => {
  return (
    <div className="card-account card-bill">
      <div>
        <h3 className="card-bill__title">BILLING ADDRESS</h3>

        <div className="card-bill__divider" />

        <div className="card-bill__user-details">
          <p>Airxistence</p>
          <p className="card-bill__text card-bill__text--fade">address of user</p>
          <p className="card-bill__text">email</p>
          <p className="card-bill__text">phone no</p>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
