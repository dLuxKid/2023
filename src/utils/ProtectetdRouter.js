import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const PrivateRouter = () => {
  const { isLoggedIn } = useStateContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};


export const PublicRouter = () => {
  const { isLoggedIn } = useStateContext();

  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PrivateRouter