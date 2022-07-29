import Image from "next/image";
import { useGlobalContext } from "../../../context";

const Navbar = () => {
  const { setIsDarkMode, isDarkMode } = useGlobalContext();

  const toggleDarkMode = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("isDarkMode", "on");
    } else {
      localStorage.removeItem("isDarkMode");
    }
  };

  return (
    <nav className="sticky top-0 bg-bLightPrimary border-b-2 dark:bg-bDarkPrimary dark:text-tDarkPrimary border-accent1">
      <div className="px-6 py-2 mx-auto flex justify-between">
        <div className="flex content-center items-center">
          <div className="flex items-center space-x-1">
            <Image src="/Logo.png" alt="Avatar" width={46} height={46} />
            <p className="text-2xl font-medium">Pokedex</p>
          </div>
        </div>

        <div className="px-1 flex">
          <button
            className="bg-bLightSecondary dark:bg-bDarkSecondary dark:hover:bg-accent1 p-3 hover:bg-accent1 hover:bg-opacity-80 rounded-full transition ease-in-out delay-100 hover:scale-110"
            onClick={() => toggleDarkMode(!isDarkMode)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
