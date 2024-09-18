import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const nav_open = () => setOpenNav(true);
  const nav_close = () => setOpenNav(false);
  const nav_toggle = () => setOpenNav((prev) => !prev);

  return (
    <AppContext.Provider value={{ openNav, nav_open, nav_close, nav_toggle }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
};

export { useGlobalContext, AppProvider };
