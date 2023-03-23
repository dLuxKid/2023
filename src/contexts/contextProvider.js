import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: "",
    username: "",
    password: "",
  });

  const login = (user) => {
    setUserData(user);
    console.log(user);
  };

  const logout = () => {
    setUserData(null);
  };


  return (
    <stateContext.Provider
      value={{
        userData,
        login,
        logout,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
