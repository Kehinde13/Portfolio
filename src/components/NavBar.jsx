import { useState } from "react";
import { GitHub, Linkedin, Mail, Menu, XSquare } from "react-feather";
import logo from "/LOGO.png";
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from "./themeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  function handleNav() {
    setNav(!nav);
  }

  const linkClass = (path) =>
    `transition-colors duration-150 hover:text-blue-600 dark:hover:text-blue-400 ${
      location.pathname === path
        ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-0.5'
        : 'text-gray-700 dark:text-gray-300'
    }`;

  return (
    <div className="z-30 fixed w-full h-20 flex items-center px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Kehinde Balogun logo" style={{ width: "50px" }} />
      </div>

      {/* Desktop Links — centered absolutely */}
      <ul className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        <li><Link to='/' className={linkClass('/')}>Home</Link></li>
        <li><Link to='/bio' className={linkClass('/bio')}>Bio</Link></li>
        <li><Link to='/portfolio' className={linkClass('/portfolio')}>Portfolio</Link></li>
        <li><Link to='/blog' className={linkClass('/blog')}>Blog</Link></li>
        <li><Link to='/contact' className={linkClass('/contact')}>Contact</Link></li>
      </ul>

      {/* Theme Toggle Button */}
      <div className="ml-auto">
        <ThemeToggle />
      </div>

      {/* Mobile Toggle */}
      <button type="button" onClick={handleNav} className="md:hidden z-20" aria-label={nav ? "Close navigation menu" : "Open navigation menu"} aria-expanded={nav}>
        {nav ? <XSquare /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <ul className={nav ? "absolute top-0 z-10 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-10 text-2xl text-gray-800 dark:text-gray-300" : "hidden"}>
        <li><Link to='/' onClick={handleNav} className={linkClass('/')}>Home</Link></li>
        <li><Link to='/bio' onClick={handleNav} className={linkClass('/bio')}>Bio</Link></li>
        <li><Link to='/portfolio' onClick={handleNav} className={linkClass('/portfolio')}>Portfolio</Link></li>
        <li><Link to='/blog' onClick={handleNav} className={linkClass('/blog')}>Blog</Link></li>
        <li><Link to='/contact' onClick={handleNav} className={linkClass('/contact')}>Contact</Link></li>
      </ul>

      {/* Desktop Side Socials */}
      <div className="hidden lg:flex fixed top-[30%] left-0">
        <ul className="flex flex-col">
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-white">
            <a href="https://www.linkedin.com/in/kehinde-balogun-raheem" className="flex justify-between items-center px-4" target="_blank" rel="noopener noreferrer">
              Linkedin <Linkedin />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] dark:bg-gray-800 text-white">
            <a href="https://github.com/Kehinde13" className="flex justify-between items-center px-4" target="_blank" rel="noopener noreferrer">
              GitHub <GitHub />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 text-white">
            <a href="mailto:balogunkehinde3@gmail.com" className="flex justify-between items-center px-4">
              Gmail <Mail />
            </a>
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600 text-white">
            <a href="https://medium.com/@balogunkehinde3" className="flex justify-between items-center px-4" target="_blank" rel="noopener noreferrer">
              Medium <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Bottom Socials */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-3 sm:hidden z-50 border-t border-gray-200 dark:border-gray-700">
        <a href="https://github.com/Kehinde13" target="_blank" rel="noopener noreferrer" aria-label="Kehinde Balogun on GitHub"><GitHub /></a>
        <a href="https://www.linkedin.com/in/kehinde-balogun-raheem" target="_blank" rel="noopener noreferrer" aria-label="Kehinde Balogun on LinkedIn"><Linkedin /></a>
        <a href="mailto:balogunkehinde3@gmail.com" aria-label="Email Kehinde Balogun"><Mail /></a>
        <a href="https://medium.com/@balogunkehinde3" target="_blank" rel="noopener noreferrer" aria-label="Kehinde Balogun on Medium"><FontAwesomeIcon icon={faMedium} size="lg" /></a>
      </div>
    </div>
  );
}

export default NavBar;
