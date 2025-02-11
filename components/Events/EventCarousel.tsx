"use client";
import React from "react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import "./EventCarousel.css";
import { Share2 } from "lucide-react";
function EventCarousel({imageSrc}:{imageSrc:string}) {
  const { toast } = useToast();
  return (
    <div className="overflow-hidden aspect-video relative">
      <Image
        src={imageSrc}
        alt="Event Image"
        width={400}
        height={200}
        className="w-full aspect-video absolute top-0 bottom-0 rounded-md"
      />
      <div className="gradient__container rounded-md absolute top-0 w-full  bottom-0"></div>
      <p className="text-white absolute bottom-2 left-3 text-xl md:text-2xl font-semibold">
        Dana Point - Baby Beach
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(`https://yourwebsite.com/blog/0`);
          toast({
            description: `Link to xyz copied to clipboard!`,
          });
        }}
      >
        <Share2
          color="white"
          className="absolute bottom-4 cursor-pointer right-3"
          size={18}
        />
      </button>
    </div>
  );
}

export default EventCarousel;
