import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
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
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* <Route path='*' element={<NoMatch />} */}
    </Routes>
  );
};

export default Routers;
