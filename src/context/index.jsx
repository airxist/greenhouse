import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [registerAs, setRegisterAs] = useState("customer");
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [category, setCategory] = useState("Accessories");

  const openModalWithContent = (content) => {
    setModal(true);
    setModalContent(content);
  };

  return (
    <AppContext.Provider
      value={{
        registerAs,
        setRegisterAs,
        modal,
        setModal,
        modalContent,
        setModalContent,
        openModalWithContent,
        category,
        setCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("no context found");
  }
  return context;
};

export { useGlobalAppContext, AppProvider };
