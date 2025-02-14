"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/06/logo_horizontal-300x125.png";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast"

interface FooterProps {
  background?: string;  
}

const Footer: React.FC<FooterProps> = () => {
  const { toast } = useToast()
  const [email, setEmail] = React.useState("");
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {    
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const datas = await response.json();
    console.log(datas);
    if(datas.status==='subscribed'){
      toast({
        title:"Subscription Confirmed",
        description:"You have successfully subscribed to our newsletter."
      })
      setEmail("");
    }else{
      toast({
        title:"Subscription Failed",
        description:"OOPS! some error occured. Please try again later."
      })
    }
  } catch (error) {
      console.log(error)
      toast({
        title:"Subscription Failed",
        description:"OOPS! some error occured. Please try again later."
      })
  }
  }
  return (
    <footer
      style={{ backgroundImage: "linear-gradient(to bottom, #F3F4F6, #F7D7AC)" }}
      className="flex flex-col gap-14 pb-1 mt-40"
    >
      <div className="flex gap-8 md:gap-0 flex-col md:flex-row justify-center w-full md:mx-auto">
        <div className="mt-5 md:pl-8 lg:pl-0 w-full md:w-5/12 flex flex-col items-center md:items-start ">
          <Image src={Logo} alt="Logo" width={180} height={62.5} />
          <p className="text-neutral-600 w-full text-md text-center md:text-left">
            Fun adventure in Orange County, CA.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex justify-center items-center">
          <div className="flex flex-col gap-6 w-fit">
            <nav className="flex flex-col items-center md:items-start gap-2 text-md text-[#535353]">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <form onSubmit={handleSignup} className="text-[#474747] flex flex-col">
              <p className="text-lg font-semibold text-center md:text-left">Sign up for alerts</p>
              <p className="text-md text-neutral-500 text-center md:text-left">
                New adventures are added weekly
              </p>
              <div className="flex flex-col lg:flex-row gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="py-2 outline-none px-4 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-[#FF9501] w-fit transition-all hover:bg-[#ffab35] py-2 px-4 text-white font-semibold rounded-md"
                >
                  Signup
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
