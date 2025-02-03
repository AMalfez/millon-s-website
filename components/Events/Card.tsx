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
  return (
    <>
      <Card className="p-0 cursor-pointer w-fit">
        <CardHeader>
          <Image
            src={event.image}
            alt="Picture of nature"
            height={200}
            width={400}
            className="object-cover rounded-t-md"
            />
        </CardHeader>
        <CardContent className="mt-3">
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#B0B0B0] flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> {event.date_from} - {event.date_to}</p>
          <p className="text-[#B0B0B0] flex gap-1"><MapPin className="mt-1" size={16} color="#b0b0b0" /> {event.location}</p>
          <div className="mt-3 flex gap-2">
            {event.tags.map((tag: string, index: number) => (<Badge key={index} variant={"secondary"}>{tag}</Badge>))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
function CardElementHorizontal({event}:any) {
  return (
    <>
      <Card className="p-0 cursor-pointer flex w-full">
        <CardHeader className="flex items-center justify-center py-2 pl-3">
          <Image
          src={event.image}
          alt="Picture of nature"
          height={200}
          width={400}
          className="object-cover rounded-md"
          />
        </CardHeader>
        <CardContent className="mt-3 w-full">
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#B0B0B0] flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> {event.date_from} - {event.date_to}</p>
          <p className="text-[#B0B0B0] flex gap-1"><MapPin size={16} className="mt-1" color="#b0b0b0" /> {event.location}</p>
          <p className="text-[#B0B0B0] flex gap-1">{event.description}</p>
          <div className="mt-3 flex gap-2">
            {event.tags.map((tag: string, index: number) => (<Badge key={index} variant={"secondary"}>{tag}</Badge>))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export {CardElement, CardElementHorizontal};
