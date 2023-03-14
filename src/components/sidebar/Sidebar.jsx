import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/logo.png";
import profilePic from "../../assets/Images/olawale.jpg";
import LogoContainer from "../LogoContainer";
import { GoDashboard } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { RiBookLine } from "react-icons/ri";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { useStateContext } from "../../contexts/contextProvider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { userData } = useStateContext();

  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleSize = () => {
      setScreenSize(window.innerWidth);
      console.log(screenSize);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [screenSize]);

  if (!activeMenu && screenSize > 768) {
    setActiveMenu(true);
  }

  const links = [
    {
      name: "dashboard",
      icon: <GoDashboard />,
    },
    { name: "profile", icon: <CgProfile /> },
    {
      name: "About",
      icon: <RiBookLine />,
    },
  ];

  return (
    <div
      className={`${activeMenu ? "w-72" : "w-8"} ${
        activeMenu && screenSize <= 768 ? "fixed" : "relative"
      } bg-gradient-to-br from-brown to-light shadow-lg duration-300 z-10`}
    >
      {screenSize <= 768 ? (
        <div
          className={` h-8 w-8 bg-white text-brown rounded-full flex justify-center items-center absolute cursor-pointer border-2 border-brown top-9 -right-3 duration-250 ${
            activeMenu ? "rotate-180" : ""
          }`}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
        >
          <AiFillCaretRight />
        </div>
      ) : null}
      <div
        className={`pl-12 pr-2 pt-8 h-screen duration-350 transition-all  ${
          !activeMenu && "scale-0"
        }`}
      >
        <div className="flex flex-col items-center justify-start gap-8">
          <div className="bg-whiteT rounded-md p-2 self-center">
            <LogoContainer logo={logo} />
          </div>
          <div className="w-full flex flex-col gap-2">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.name}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-whiteT flex gap-4 items-center rounded-lg p-2 cursor-pointer hover:bg-whiteT"
                    : "flex gap-4 items-center rounded-lg p-2 cursor-pointer hover:bg-whiteT"
                }
              >
                <span className="text-white">{item.icon}</span>
                <p
                  className={`text-xs sm:text-sm md:text-base font-light text-white tracking-tight leading-[14px] capitalize`}
                >
                  {item.name}
                </p>
              </NavLink>
            ))}
            <div className="flex gap-2 p-2 items-center">
              <img
                src={profilePic}
                alt="profilepic"
                className="h-8 w-8 object-cover rounded-full"
              />
              <p className="text-xs sm:text-sm md:text-base font-light text-white tracking-tight leading-[14px] capitalize flex items-center">
                {userData.name}
                <span className="ml-4 pt-2 self-end cursor-pointer">
                  <BsFillCaretDownFill />
                </span>
              </p>
            </div>
          </div>
          <div className="w-[80%] h-[2px] bg-white/[50%] rounded-md self-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
