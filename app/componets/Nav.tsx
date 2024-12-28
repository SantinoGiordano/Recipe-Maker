// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-10 fixed min-w-full">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-4xl font-bold">
         MySite
        </Link>
        <div className="space-x-8">
          <Link href="/" className="font-thin text-2xl text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="font-thin text-2xl text-white hover:text-gray-300">
           About
          </Link>
          <Link href="/recipes" className="font-thin text-2xl text-white hover:text-gray-300">
           Recipes
          </Link>
          <Link href="/contact" className="font-thin text-2xl text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
