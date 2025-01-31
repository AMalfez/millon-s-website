"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

function BlogImage({ src, alt }: { src: StaticImageData, alt: string }) {
  return (
    <>
      <Image src={src} alt={alt} className="object-cover w-full my-5" />
    </>
  );
}

export default BlogImage;
