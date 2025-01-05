"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Skill', label: 'Skills' },
    { href: '/Project', label: 'Projects' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black bg-opacity-0 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-1xl mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center ">
              <span className="text-3xl font-bold text-blue-400 underline">
              BlogSpace
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="max-md:hidden flex space-x-8">
  {navLinks.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      className="relative text-1xl text-white duration-300 font-bold transition-colors group"
    >
      {link.label}
      <span className="absolute top-6 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-green-400 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;