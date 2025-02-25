"use client";
import React, { useState } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/06/logo_horizontal-300x125.png"
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white z-50 w-full navbar_container px-4">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              <Image
                src={Logo}
                alt="Logo"
                width={150}
              />
            </Link>
          </div>
          <div className="hidden text-md md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 hover:text-gray-600"
            >
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mx-auto w-10/12 md:hidden">
          <div className="pt-5 pl-2 pb-3 space-y-3 sm:px-3 flex flex-col">
            <Link href="/" className="text-gray-800 border-b pb-1 pl-1 transition-all hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 border-b pb-1 pl-1 transition-all hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 border-b pb-1 pl-1 transition-all hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 border-b pb-1 pl-1 transition-all hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
