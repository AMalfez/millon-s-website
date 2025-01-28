"use client";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Imgg from "@/public/assets/09/History-of-OC.jpg"
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

import React from "react";
import { Clock, MapPin } from "lucide-react";

function CardElement() {
  return (
    <>
      <Card className="p-0 cursor-pointer w-fit">
        <CardHeader>
          <Image
          src={Imgg}
          alt="Picture of nature"
          height={200}
          width={400}
          className="object-cover rounded-t-md"
          />
        </CardHeader>
        <CardContent className="mt-3">
          <p className="font-bold text-xl">Dana Point – Baby Beach</p>
          <p className="text-[#B0B0B0] flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> 01-01-2024 - 01-01-3024</p>
          <p className="text-[#B0B0B0] flex gap-1"><MapPin className="mt-1" size={16} color="#b0b0b0" /> 34451 Ensenada Pl, Dana Point, CA</p>
          <div className="mt-3"><Badge variant={"secondary"}>Badge</Badge></div>
        </CardContent>
      </Card>
    </>
  );
}
function CardElementHorizontal() {
  return (
    <>
      <Card className="p-0 cursor-pointer flex w-full">
        <CardHeader className="flex items-center justify-center py-2 pl-3">
          <Image
          src={Imgg}
          alt="Picture of nature"
          height={300}
          width={500}
          className="object-cover rounded-t-md"
          />
        </CardHeader>
        <CardContent className="mt-3">
          <p className="font-bold text-xl">Dana Point – Baby Beach</p>
          <p className="text-[#B0B0B0] flex items-center gap-1"><Clock size={16} color="#b0b0b0" /> 01-01-2024 - 01-01-3024</p>
          <p className="text-[#B0B0B0] flex gap-1"><MapPin size={16} className="mt-1" color="#b0b0b0" /> 34451 Ensenada Pl, Dana Point, CA</p>
          <p className="text-[#B0B0B0] flex gap-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi dolorum doloremque, cumque atque reiciendis distinctio ab ipsam a eveniet ut consequuntur asperiores corrupti.</p>
          <div className="mt-3"><Badge variant={"secondary"}>Badge</Badge></div>
        </CardContent>
      </Card>
    </>
  );
}

export {CardElement, CardElementHorizontal};
