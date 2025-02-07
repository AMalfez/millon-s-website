"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

function BlogImage({ src, alt }: { src: StaticImageData, alt: string }) {
  return (
    <>
      <Image src={src} alt={alt} width={200} height={160} className="object-cover w-full my-5" />
    </>
  );
}

export default BlogImage;
