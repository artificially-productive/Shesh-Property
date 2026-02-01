import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50 ease-in duration-300 backdrop-blur-sm bg-black/10 dark:bg-black/30 shadow-sm">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-2xl hover:text-orange-500 transition-colors">
            Shesh Property
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex text-sm font-bold items-center">
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/listings">Listings</Link>
          </li>
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          
          {/* Theme Changer */}
          <li className="ml-4">
            <ThemeChanger />
          </li>
          
          {/* CTA Button */}
          <li className="ml-6">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300'
          }
        >
          <ul className="text-white">
            <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-500">
              <Link href="/listings">Listings</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-500">
              <Link href="/services">Services</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
