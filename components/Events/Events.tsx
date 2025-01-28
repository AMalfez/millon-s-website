"use client";
import { SquareSquare, Menu } from "lucide-react";
import React from "react";
import {CardElement, CardElementHorizontal} from "./Card";

function Events() {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => setIsActive(!isActive);
  return (
    <div className="w-full min-h-80 flex flex-col items-center px-28">
      <div className="flex justify-between items-center w-full">
        <div className="font-sans text-xl font-semibold">Events</div>
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
      {!isActive && (<div className="w-full h-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </div>)}
      {isActive && (
        <div className="w-full h-full mt-5 grid grid-cols-1 gap-4">
          <CardElementHorizontal />
          <CardElementHorizontal />
          <CardElementHorizontal />
          <CardElementHorizontal />
        </div>
      )}
      <button className="border-2 border-[#474747] transition-all text-[#474747] rounded-md hover:bg-[#474747] hover:text-white my-10 px-4 py-2">
        LOAD MORE
      </button>
    </div>
  );
}

export default Events;
