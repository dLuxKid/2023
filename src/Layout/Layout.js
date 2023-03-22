//REACT
import React from "react";
// COMPONENT
import Sidebar from "../components/Sidebar";
import Routers from "../Router/Routers";
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";


const Layout = () => {
  const { userData } = useStateContext();

  return (
    <div className="flex relative">
      {userData.token ? <Sidebar /> : null}
      <div className="w-full">
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
