import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
 
  return (
    <stateContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
