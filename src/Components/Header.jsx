
import logo from "./../assets/Images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

const Header = () => {
 
  const { theme, setTheme } = useContext(ThemeContext);
  // useEffect(() => {
  //   console.log("theme:", theme);
  // }, [theme]);

  return (
    <div className="flex items-center p-2">
      <img src={logo} alt="logo" width={130} height={130} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2"
          id="Search"
        />
      </div>
      <div className=" cursor-pointer" >
        {theme=="light" ? (
          <HiMoon onClick={() => {setTheme("dark");localStorage.setItem( 'theme','dark')} }  className=" text-[29px] bg-slate-200 text-black p-1 rounded-full" />
        ) : (
          <HiSun onClick={() => {setTheme("light");localStorage.setItem('theme','light') }} className=" text-[29px] bg-white text-black p-1 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Header;
