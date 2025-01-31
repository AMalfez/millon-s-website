"use client";
import Image from "next/image";
import React from "react";

function BlogImage({ src, alt }: {src:string, alt:string}) {
  return (
    <>
      <Image src={src} alt={alt} className="object-cover w-full my-5" />
    </>
  );
}

export default BlogImage;
