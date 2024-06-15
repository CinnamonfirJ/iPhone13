import logo from "../assets/images/header-logo.png";
import { navItems } from "../constants";
import { hamburger, close } from "../assets/icons";
import Button from "./Button";
import { useState } from "react";

export const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  function mobileMenu() {
    if (mobileActive) {
      setMobileActive(false);
    } else {
      setMobileActive(true);
    }
  }

  return (
    <header className=' padding-x py-8 z-50 w-full'>
      <nav className=' flex flex-1 justify-between items-center max-container z-50'>
        <div>
          <a href='/'>
            {" "}
            <img src={logo} alt='logo' width={207} />
          </a>
        </div>
        <div className=''>
          <ul className=' flex-1 flex justify-center items-start gap-16 max-lg:hidden'>
            {navItems.map((items) => (
              <li>
                <a href={items.href}>{items.label} </a>
              </li>
            ))}
          </ul>
        </div>

        <div className=' max-lg:hidden'>
          <Button text='Get Now' />
        </div>

        <div
          className=' hidden max-lg:block cursor-pointer'
          onClick={mobileMenu}
        >
          <img src={hamburger} alt='' width={24} height={24} />
        </div>

        <div
          className={` h-lvh w-64 fixed top-0 right-0 bg-rgba(0, 0, 0, 0.378) p-12 z-50 backdrop-blur-md  transition ease-out duration-500 ${
            mobileActive ? "  translate-x-[0px]" : " translate-x-[450px]"
          }`}
        >
          <div className=' cursor-pointer mb-12' onClick={mobileMenu}>
            <img src={close} alt='' width={24} height={24} />
          </div>
          <ul className=' flex-col flex justify-center items-start gap-16  '>
            {navItems.map((items) => (
              <li onClick={mobileMenu}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
