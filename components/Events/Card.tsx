"use client";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

import React from "react";
import { Clock, MapPin } from "lucide-react";
import { Event } from "@/reducers/EventReducer";
interface EventProp {
  event: Event;
}
const CardElement: React.FC<EventProp> =({event}) => {
  const date = new Date(event.date_from).toDateString();
  return (
    <>
      <Card className="p-2 cursor-pointer w-fit">
        <CardHeader>
          <Image
            src={event.image}
            alt="Picture of nature"
            height={200}
            width={400}
            className="object-cover w-full aspect-video rounded-md"
            />
        </CardHeader>
        <CardContent className="mt-3">
          <p className="text-[#bdbdbd] text-sm flex items-center gap-1">{date}</p>
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#979797] text-sm flex gap-1">{event.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, autem!</p>
          <p className="text-[#979797] mt-4 text-sm flex gap-1">By {event.organizer}</p>
          
        </CardContent>
      </Card>
    </>
  );
}
const CardElementHorizontal: React.FC<EventProp> =({event}) => {
  return (
    <>
      <Card className="p-0 cursor-pointer flex w-full h-fit">
        <CardHeader className="flex items-center justify-center py-2 pl-3">
          <Image
          src={event.image}
          alt="Picture of nature"
          height={150}
          width={300}
          className="object-cover rounded-md"
          />
        </CardHeader>
        <CardContent className="mt-3 w-full">
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> {event.date_from} - {event.date_to}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex gap-1"><MapPin size={16} className="mt-1" color="#b0b0b0" /> {event.location}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex gap-1 mt-2">{event.description}</p>
          <div className="mt-3 flex gap-2">
            {event.tags.map((tag: string, index: number) => (<Badge key={index} variant={"secondary"}>{tag}</Badge>))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export {CardElement, CardElementHorizontal};
