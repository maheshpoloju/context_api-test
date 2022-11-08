import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const ProtectedRoute = () => {
  const context = useContext(LoginContext);
  const { email, password } = context;
  let isValid = false;
  if (email === "test@gmail.com" && password === "1234") {
    isValid = true;
  }
  console.log(isValid);
  if (isValid === false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
