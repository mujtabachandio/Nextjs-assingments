import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={30} />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © 2024 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
