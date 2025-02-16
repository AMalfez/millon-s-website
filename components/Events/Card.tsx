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
import { type SanityDocument } from "next-sanity";
import urlFor from "@/lib/ImageUrlBuilder";
import formatDate from "@/lib/formatDate";
import { trimStringForEvent } from "@/lib/utils";
interface EventProp {
  event: SanityDocument;
}
const CardElement: React.FC<EventProp> =({event}) => {
  const eventImageUrl = event.mainImage ? urlFor(event.mainImage)?.width(300).height(200).url():null;
  return (
    <>
      <Card className="p-2 cursor-pointer w-fit">
        <CardHeader>
          {eventImageUrl && (<Image
            src={eventImageUrl}
            alt="Picture of nature"
            height={200}
            width={400}
            className="object-cover w-full aspect-video rounded-md"
            />)}
        </CardHeader>
        <CardContent className="mt-3">
          <p className="text-[#bdbdbd] text-sm flex items-center gap-1">{formatDate(event.publishedAt)}</p>
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#979797] text-sm flex gap-1">{trimStringForEvent(event.description)}</p>
          <p className="text-[#979797] mt-4 text-sm flex gap-1">By {event.organizer.name}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {event.type.slice(0, 3).map((tag: string, index: number) => (<Badge key={index} variant={"secondary"}>{tag}</Badge>))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
const CardElementHorizontal: React.FC<EventProp> =({event}) => {
  const eventImageUrl = event.mainImage ? urlFor(event.mainImage)?.width(300).height(200).url():null;
  return (
    <>
      <Card className="p-0 cursor-pointer flex w-full h-fit">
        <CardHeader className="flex items-center justify-center py-2 pl-3">
        {eventImageUrl && (<Image
            src={eventImageUrl}
            alt="Picture of nature"
            height={150}
            width={300}
            className="object-cover rounded-md"
            />)}
        </CardHeader>
        <CardContent className="mt-3 w-full">
          <p className="font-bold text-xl">{event.title}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> {formatDate(event.startDate)} - {formatDate(event.endDate)}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex gap-1"><MapPin size={16} className="mt-1" color="#b0b0b0" /> {event.location}</p>
          <p className="text-[#B0B0B0] text-sm md:text-md flex gap-1 mt-2">{trimStringForEvent(event.description)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {event.type.map((tag: string, index: number) => (<Badge key={index} variant={"secondary"}>{tag}</Badge>))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export {CardElement, CardElementHorizontal};
