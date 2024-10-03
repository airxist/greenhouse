import React from "react";
import { Route, Routes } from "react-router-dom";
import UserMain from "./UserMain";
import UserDetails from "./UserDetails";

const Users = ({ type = "customer" }) => {
  return (
    <Routes>
      <Route index element={<UserMain type={type} />} />
      <Route path="/details/:id" element={<UserDetails type={type} />} />
    </Routes>
  );
};

export default Users;
