import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:text-orange-500">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white hover:text-orange-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
