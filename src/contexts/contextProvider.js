import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        userData,
        setUserData,
        screenSize,
        setScreenSize,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
