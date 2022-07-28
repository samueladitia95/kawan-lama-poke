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
            className="text-accent1"
            onClick={() => toggleDarkMode(!isDarkMode)}
          >
            Toggle Dark Mode
          </button>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
