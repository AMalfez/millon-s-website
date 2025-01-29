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
    <nav className="text-white absolute top-0 z-50 w-full navbar_container p-4">
      <div className="max-w-[856px] mx-auto">
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
        <div className=" md:hidden">
          <div className="px-8 pt-5 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" className="text-gray-800 transition-all hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 transition-all hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 transition-all hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 transition-all hover:text-gray-900"
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
