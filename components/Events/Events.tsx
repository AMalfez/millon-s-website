"use client";
import { SquareSquare, Menu } from "lucide-react";
import React from "react";
import { CardElement, CardElementHorizontal } from "./Card";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
interface EventProp{
  events:SanityDocument[];
}
const Events: React.FC<EventProp> = ({events}) => {
  const [isActive, setIsActive] = React.useState(false);
  
  const handleClick = () => setIsActive(!isActive);
  return (
    <div className="min-h-80 flex flex-col items-center justify-center w-10/12 mx-auto px-5">
      <div className="flex justify-between items-center w-full">
        <div className="font-sans text-xl mx-auto md:mx-0 font-semibold">Events</div>
        <div className="items-center gap-2 hidden md:flex">
          <SquareSquare
            strokeWidth={3}
            onClick={handleClick}
            className="cursor-pointer"
            color={!isActive ? `#FF9501` : "#B0B0B0"}
          />
          <Menu
            strokeWidth={3}
            onClick={handleClick}
            color={isActive ? `#FF9501` : "#B0B0B0"}
            className="cursor-pointer"
          />
        </div>
      </div>
      {!isActive && (
        <div className="w-full h-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="event_section_scroll_to">
          {events.map((e:SanityDocument, i:number) => (
            <Link className="w-fit mx-auto" href={`/events/${e.slug.current}`} key={i}>
              <CardElement key={i} event={e} />
            </Link>
          ))}
        </div>
      )}
      {isActive && (
        <div className="w-full h-full mt-5 grid grid-cols-1 gap-4">
          {events.map((e:SanityDocument, i:number) => (
            <Link className="w-full mx-auto" href={`/events/${e.slug.current}`} key={i}>
              <CardElementHorizontal key={i} event={e} />
            </Link>
          ))}
        </div>
      )}
      <button className="border-2 border-[#474747] transition-all text-[#474747] rounded-md hover:bg-[#474747] hover:text-white my-10 px-4 py-2">
        LOAD MORE
      </button>
    </div>
  );
}

export default Events;
