import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Homepage/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRouter, { PublicRouter } from "../utils/ProtectetdRouter.js";

const Routers = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
