import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-black to-blue-700 p-4 shadow-lg">
      <div className="text-white font-bold text-2xl">Mujtaba Chandio <span className='animate-pulse'>🐦‍🔥</span></div>
      <div className="relative group">
        <div className="space-x-6">
          <Link
            href="/"
            className="text-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
