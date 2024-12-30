"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  // State to track if dropdown is open
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-10 fixed w-full z-10">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-4xl font-bold">
          MySite
        </Link>
        <div className="space-x-8 flex items-center">
          <Link
            href="/"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            About
          </Link>

        
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/recipes/full-dish"
              className="font-thin text-2xl text-white hover:text-gray-300"
            >
              Recipes
            </Link>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute left-0 bg-blue-500 p-2 w-40">
                <Link
                  href="/recipes/full-dish"
                  className="block text-white text-lg px-4 py-2 hover:bg-blue-600 rounded"
                >
                  Full Dish
                </Link>
                <Link
                  href="/recipes/ingredients"
                  className="block text-white text-lg px-4 py-2 hover:bg-blue-600 rounded"
                >
                  Ingredients
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="font-thin text-2xl text-white hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
