"use client";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Mujtaba Chandio
        </div>
        <div className="space-x-4">
          <button 
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md" 
            onClick={() => router.push('/')}
          >
            Home
          </button>
          <button 
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md" 
            onClick={() => router.push('/about')}
          >
            About
          </button>
          <button 
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md" 
            onClick={() => router.push('/contact')}
          >
            Contact
          </button>
          <button 
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md" 
            onClick={() => router.push('/footer')}
          >
            Footer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
