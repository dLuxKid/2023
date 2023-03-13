import React from "react";

const LogoContainer = ({logo}) => {
  return (
    <div className=" w-12 h-12 ">
      <img src={logo} alt="logo" className="w-full h-full" />
    </div>
  );
};

export default LogoContainer;
