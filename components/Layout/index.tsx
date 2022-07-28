import { Fragment, ReactNode, useEffect } from "react";
import { GlobalProvider, useGlobalContext } from "../../context";
import Navbar from "./Navbar";

//! Harus double seperti ini component Layoutnya
//! Kalau gak Contextnya ga akan responsive/jalan
const NestedLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  useEffect(() => {
    if (localStorage.getItem("isDarkMode")) {
      setIsDarkMode(true);
    }
  }, [setIsDarkMode]);

  return (
    <Fragment>
      {/* Temporary  */}
      <div className={`font-display md:flex ${isDarkMode ? "dark" : ""}`}>
        <div className="flex-grow dark:bg-bDarkPrimary dark:text-tDarkPrimary">
          <Navbar />
          <div className="container" style={{ minHeight: "200vh" }}>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalProvider>
      <NestedLayout>{children}</NestedLayout>
    </GlobalProvider>
  );
};

export default Layout;
