import { useState } from "react";
import { GitHub, Linkedin, Mail, Menu, Twitter, XSquare } from "react-feather";
import logo from "../assets/LOGO.png";
import { Link } from 'react-scroll';

function NavBar() {
  const [nav, setNav] = useState(false);

function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <div>
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} className="bn5">
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className="bn5">
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className="bn5">
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className="bn5">
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className="bn5">
            Contact
          </Link>
        </li>
      </ul>
      </div>

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <XSquare /> : <Menu />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center gap-10 text-2xl"
            : "hidden"
        }
      >
          <li className='text-2xl'>
          <Link onClick={handleNav} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='text-2xl'>
          {' '}
          <Link onClick={handleNav} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='text-2xl'>
          {' '}
          <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='text-2xl'>
          {' '}
          <Link onClick={handleNav} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='text-2xl'>
          {' '}
          <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


{/* Socials */}
      <div className="hidden lg:flex fixed top-[30%] left-0">
        <ul className="flex flex-col ">
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center gap-2 text-gray-300" 
             href="www.linkedin.com/in/kehinde-balogun-9a1078223">
              Linkedin <Linkedin />
            </a> 
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center gap-2 text-gray-300" 
             href="https://github.com/Kehinde13">
              GitHub <GitHub />
            </a> 
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a className="flex justify-between items-center gap-2 text-gray-300" 
             href="http://mailto:balogunkehinde3@gmail.com">
              Gmail <Mail />
            </a> 
          </li>
          <li className="w-[150px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600">
            <a className="flex justify-between items-center gap-2 text-gray-300" 
             href="http://twitter.com/kehny_">
              Twitter <Twitter />
            </a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
