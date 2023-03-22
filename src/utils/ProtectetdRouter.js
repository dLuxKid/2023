import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const PrivateRouter = () => {
  const { userData } = useStateContext();

  return userData.token ? <Outlet /> : <Navigate to="/" />;
};


export const PublicRouter = () => {
  const { userData } = useStateContext();

  return !userData.token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PrivateRouter