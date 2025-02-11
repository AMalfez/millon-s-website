"use client";
import React from "react";
import EventCarousel from "./EventCarousel";
import Link from "next/link";
import {PortableText, type SanityDocument } from "next-sanity";
import formatDate from "@/lib/formatDate";
function EventItem({event}:{event:SanityDocument}) {
  console.log(event);
  
  return (
    <div className="max-w-[856px] border mx-auto bg-white rounded-lg min-h-56 p-3">
      <EventCarousel imageSrc={event.mainImage.asset.url} />
      <div className="w-full min-h-20 px-3">
        <div className="mt-5">
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Location</p>
            <p className="text-[#b0b0b0]">{event.location}</p>
          </div>
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Available dates</p>
            <p className="text-[#b0b0b0]">{formatDate(event.startDate)} - {formatDate(event.endDate)}</p>
          </div>
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row">
            <p className="font-semibold md:w-3/12">Organized by</p>
            <Link className="text-[#b0b0b0] underline" href={`/admin/${event.organizer.slug.current}`}>{event.organizer.name}</Link>
          </div>
        </div>
        <div className="prose mb-3 mt-5">
          {Array.isArray(event.body) && (
            <PortableText value={event.body} />
          )}
        </div>
        <div className="py-3 flex max-w-[836px] mx-auto gap-2">
         {event.tags.map((tag: string, index: number) => (<div key={index} className="text-[#b0b0b0] border-2 rounded-md inline-block px-2 border-[#b0b0b0]">
            {tag}
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default EventItem;
