import React from "react";
import logo from "../../assets/Images/logo.png";
import LogoContainer from "../LogoContainer";
import { GoDashboard } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { RiBookLine } from "react-icons/ri";

const Sidebar = () => {
  const links = [
    {
      name: "dashboard",
      icon: <GoDashboard />,
    },
    { name: "Profile", icon: <CgProfile /> },
    {
      name: "About",
      icon: <RiBookLine />,
    },
  ];

  return (
    <div className="w-72 h-screen bg-gradient-to-br from-brown to-light shadow-lg">
      <div className="pl-12 pr-2 pt-8 h-full flex flex-col items-center justify-start gap-10 ">
        <div className="bg-whiteT rounded-md p-2 self-start">
          <LogoContainer logo={logo} />
        </div>
        <div className="w-full flex flex-col gap-4">
          {links.map((item, index) => (
            <div
              className="flex gap-4 rounded-lg items-center p-2 cursor-pointer hover:bg-whiteT"
              kwy={index}
            >
              <span className="text-white">{item.icon}</span>
              <p
                className={`text-xs sm:text-sm md:text-base font-light text-white tracking-tight leading-[14px] capitalize`}
              >
                {item.name}
              </p>
            </div>
          ))}
          <div>
            
          </div>
        </div>
        <div className="w-[80%] h-[2px] bg-whiteT rounded-md self-start"></div>
      </div>
    </div>
  );
};

export default Sidebar;
