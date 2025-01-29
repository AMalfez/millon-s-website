"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/06/logo_horizontal-300x125.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "linear-gradient(to bottom, #F3F4F6, #F7D7AC)" }}
      className="flex flex-col gap-20 pb-1"
    >
      <div className="flex gap-8 md:gap-0 flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:pl-28 mt-10 flex flex-col items-center md:items-start">
          <Image src={Logo} alt="Logo" width={180} height={62.5} />
          <p className="text-neutral-600 w-full text-md text-center md:text-left">
            Fun adventure in Orange County, CA.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-28">
          <div className="flex flex-col gap-6 w-fit">
            <nav className="flex flex-col items-center md:items-start gap-2 text-lg text-[#535353]">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <form className="text-[#474747] flex flex-col">
              <p className="text-lg font-semibold text-center md:text-left">Sign up for alerts</p>
              <p className="text-md text-neutral-500 text-center md:text-left">
                New adventures are added weekly
              </p>
              <div className="flex flex-col lg:flex-row gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Sign up for newsletter"
                  className="py-2 outline-none px-4 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-[#FF9501] w-fit transition-all hover:bg-[#ffab35] py-2 px-4 text-white font-semibold rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-[#faebd7] w-full text-center text-4xl md:text-5xl lg:text-6xl font-bold">
        <span className="block text-[14px] text-neutral-500 font-normal">©2024 | OC Fun Frenzy | All rights reserved</span>
        Orange County Fun Frenzy
      </div>
    </footer>
  );
};

export default Footer;
