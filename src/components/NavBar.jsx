import { useState } from "react";
import { GitHub, Linkedin, Mail, Menu, Twitter, XSquare } from "react-feather";
import logo from "../assets/LOGO.png";
import { Link } from 'react-router-dom';
import ThemeToggle from "./themeToggle";

function NavBar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="z-30 fixed w-full h-20 flex justify-between items-center px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow-md">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-4">
        <li><Link to='/' className="dark:bn5 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
        <li><Link to='/bio' className="dark:bn5 hover:text-blue-600 dark:hover:text-blue-400">Bio</Link></li>
        <li><Link to='/portfolio' className="dark:bn5 hover:text-blue-600 dark:hover:text-blue-400">Portfolio</Link></li>
        <li><Link to='/elevator-pitch' className="dark:bn5 hover:text-blue-600 dark:hover:text-blue-400">Elevator Pitch</Link></li>
        <li><Link to='/blog' className="dark:bn5 hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
      </ul>

      {/* Theme Toggle Button */}
      <div className="ml-36">
        <ThemeToggle />
      </div>

      {/* Mobile Toggle */}
      <div onClick={handleNav} className="md:hidden z-10 ">
        {nav ? <XSquare /> : <Menu />}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? "absolute top-0 z-10 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-10 text-2xl text-gray-800 dark:text-gray-300" : "hidden"}>
        <li><Link to='/' onClick={handleNav}>Home</Link></li>
        <li><Link to='/bio' onClick={handleNav}>Bio</Link></li>
        <li><Link to='/portfolio' onClick={handleNav}>Portfolio</Link></li>
        <li><Link to='/elevator-pitch' onClick={handleNav}>Elevator Pitch</Link></li>
        <li><Link to='/blog' onClick={handleNav}>Blog</Link></li>
      </ul>

      {/* Desktop Side Socials */}
      <div className="hidden lg:flex fixed top-[30%] left-0">
        <ul className="flex flex-col">
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-white">
            <a href="https://www.linkedin.com/in/kehinde-balogun-raheem" className="flex justify-between items-center px-4" target="_blank" rel="noreferrer">
              Linkedin <Linkedin />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] dark:bg-gray-800 text-white">
            <a href="https://github.com/Kehinde13" className="flex justify-between items-center px-4" target="_blank" rel="noreferrer">
              GitHub <GitHub />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 text-white">
            <a href="mailto:balogunkehinde3@gmail.com" className="flex justify-between items-center px-4" target="_blank" rel="noreferrer">
              Gmail <Mail />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600 text-white">
            <a href="http://twitter.com/kehny_" className="flex justify-between items-center px-4" target="_blank" rel="noreferrer">
              Twitter <Twitter />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Bottom Socials */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-3 sm:hidden z-50 border-t border-gray-200 dark:border-gray-700">
        <a href="https://github.com/Kehinde13" target="_blank" rel="noopener noreferrer"><GitHub /></a>
        <a href="https://www.linkedin.com/in/kehinde-balogun-raheem" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="mailto:balogunkehinde3@gmail.com" target="_blank" rel="noopener noreferrer"><Mail /></a>
        <a href="https://twitter.com/kehny_" target="_blank" rel="noopener noreferrer"><Twitter /></a>
      </div>
    </div>
  );
}

export default NavBar;
