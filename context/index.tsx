import { createContext, useState, ReactNode, useContext, Context } from "react";
import { GlobalContextType } from "./type";

export const GlobalContext: Context<GlobalContextType> =
  createContext<GlobalContextType>({
    isDarkMode: false,
    setIsDarkMode: () => {},
  });

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
