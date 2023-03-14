import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <stateContext.Provider
      value={{
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
