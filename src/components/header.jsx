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
    <div className="fixed top-0 left-0 w-full h-16 sm:h-20 z-50 ease-in duration-300 backdrop-blur-sm bg-black/10 dark:bg-black/30 shadow-sm">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 sm:p-4 text-white">
        
        {/* Logo */}
        <Link href="/">
          <img 
            src="/logo/shesh%20property%20logo%20new.svg" 
            alt="Shesh Property Logo" 
            className="h-10 sm:h-12 w-auto cursor-pointer"
          />
        </Link>


        {/* Desktop Navigation */}
        <ul className="hidden sm:flex text-sm font-bold items-center">
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-orange-500 cursor-pointer">
            <Link href="/about">About Us</Link>
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
          <li className="ml-4">
            <ThemeChanger />
          </li>
          {/* Desktop CTA – hidden on mobile */}
          <li className="ml-6 hidden sm:block">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={22} className="text-white" />
          ) : (
            <AiOutlineMenu size={22} className="text-white" />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center text-center transition-all duration-300 ${
            nav ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="text-white space-y-2">
            <li onClick={handleNav} className="p-4 text-3xl hover:text-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-orange-500">
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-orange-500">
              <Link href="/listings">Listings</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-orange-500">
              <Link href="/services">Services</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-orange-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={handleNav}
              className="px-8 py-3 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;