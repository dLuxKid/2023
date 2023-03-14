import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../contexts/contextProvider";

import Routers from "../Router/Routers";

const Layout = () => {
  const { isLoggedIn } = useStateContext();

  return (
    <div className="flex relative">
      {isLoggedIn ? <Sidebar /> : null}
      <div className="w-full bg-[#f5f5f5]">
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
