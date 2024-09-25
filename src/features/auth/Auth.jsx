import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AuthLayout from "../../shared/lyt/AuthLayout";
import SignUp from "./components/SignUp";
import Verification from "./components/Verification";
import CreateAccount from "./components/CreateAccount";
import Personal from "./components/Personal";
import SignIn from "./components/SignIn";
import Account from "./components/Account";

const Auth = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="verification" element={<Verification />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="personal" element={<Personal />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </AuthLayout>
  );
};

export default Auth;
