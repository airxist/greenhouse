import React from "react";

const ProtectedRoute = ({ children }) => {
  const user = { name: "jose" };

  return children;
};

export default ProtectedRoute;
