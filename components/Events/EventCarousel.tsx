"use client";
import React from "react";
import Image from "next/image";
import Img1 from "@/public/assets/images/Hero_image_1.jpeg";
// import Img2 from "@/public/assets/images/Hero_image_2.jpeg";
// import Img3 from "@/public/assets/images/Hero_image_3.jpeg";
import "./EventCarousel.css";
import { Share2 } from "lucide-react";
function EventCarousel() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src={Img1}
        alt="Event Image"
        className="w-full aspect-video rounded-md"
      />
      <div className="gradient__container rounded-md absolute top-0 w-full h-full">
      </div>
      <p className="text-white absolute bottom-2 left-3 text-xl md:text-2xl font-semibold">Dana Point - Baby Beach</p>
      <Share2 color="white" className="absolute bottom-4 cursor-pointer right-3" size={18} />
    </div>
  );
}

export default EventCarousel;
