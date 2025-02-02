"use client";
import { MoveLeft } from "lucide-react";
import React from "react";
import EventCarousel from "./EventCarousel";
import Link from "next/link";
import Paragraph from "../Blog/Paragraph";
function EventItem() {
  return (
    <div className="max-w-[856px] border mx-auto bg-white rounded-lg min-h-56 p-3 md:px-7 md:py-5">
      <MoveLeft color="#979797" />
      <div className="w-full min-h-20 mt-3 md:mt-5 px-5">
        <EventCarousel />
        <div className="mt-5">
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Location</p>
            <p className="text-[#b0b0b0]">34451 Ensenada PI, Dana Point, CA</p>
          </div>
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Available dates</p>
            <p className="text-[#b0b0b0]">Jan 1, 2024 - Jan 1, 3024</p>
          </div>
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Organized by</p>
            <Link className="text-[#b0b0b0] underline" href={"/"}>Admin</Link>
          </div>
        </div>
        <Paragraph>
          <p className="text-[#b0b0b0]">
          Nestled in Dana Point, California, Baby Beach is the perfect place for
          families with small children seeking a safe, fun, and picturesque
          beach getaway. This hidden gem, located within the renowned Dana Point
          Harbor, offers a calm, sheltered environment for beachgoers of all
          ages to unwind, swim, and soak in the Southern Californian sun.
          </p>
        </Paragraph>
        <Paragraph>
          <p className="text-[#b0b0b0]">
            To get more information about the event, please visit:{" "}
            <Link className="underline" href={"/"}>official website</Link>.
          </p>
        </Paragraph>
        <div className="py-3 flex max-w-[836px] mx-auto gap-2">
          <div className="text-[#b0b0b0] border-2 rounded-md inline-block px-2 border-[#b0b0b0]">
            Adventure
          </div>
          <div className="text-[#b0b0b0] border-2 rounded-md inline-block px-2 border-[#b0b0b0]">
            Fun
          </div>
          <div className="text-[#b0b0b0] border-2 rounded-md inline-block px-2 border-[#b0b0b0]">
            Tag
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
