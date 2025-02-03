"use client";
import React from "react";
// import { useParams } from "next/navigation";
import { Heart, MessageSquareText, MoveLeft, Share2 } from "lucide-react";
import Img from "@/public/assets/06/Balboa-funzone-300x150.jpg";
import Paragraph from "./Paragraph";
import BlogImage from "./BlogImage";
import Heading from "./Heading";
import List from "./List";
import CommentSection from "../Comment/Comment";
import { useToast } from "@/hooks/use-toast";

export default function Blog() {
  const { toast } = useToast();
  // const param = useParams();
  return (
    <div className="max-w-[856px] mx-auto">
      <MoveLeft className="cursor-pointer" color="#979797" />
      <div className="max-w-[836px] mt-5 mx-auto border-b-2 border-[#b0b0b0] pb-5">
        <h1 className="text-xl font-semibold">
          The Most Popular Ride at Disneyland
        </h1>
        <p className="text-sm text-[#979797]">By admin on Sept 5, 2024</p>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-[#979797] text-[14px]">
              <Heart size={14} color="#979797" /> 24
            </div>
            <div className="flex items-center gap-1 text-[#979797] text-[14px]">
              <MessageSquareText size={14} color="#979797" /> 24
            </div>
          </div>
          <div className="flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(`https://yourwebsite.com/blog/0`);
                toast({
                  description: `Link to xyz copied to clipboard!`,
                });
              }}
            >
              <Share2 size={14} color="#979797" />
            </button>
          </div>
        </div>
        <BlogImage src={Img} alt={"Balboa Funzone"} />
        <Paragraph>
          When it comes to iconic Disneyland rides, Space Mountain reigns
          supreme as one of the most popular and beloved attractions in the
          park. Nestled in Tomorrowland, this indoor roller coaster has been
          thrilling visitors since it first opened in 1977. With its futuristic
          theme, high-speed thrills, and captivating ambiance, Space Mountain
          has remained a favorite among Disneyland guests for decades. Let’s
          take a closer look at what makes Space Mountain such a standout
          attraction and why it continues to captivate fans year after year.
        </Paragraph>
        <Heading content={"A New Kind of Roller Coaster"} />
        <Paragraph>
          When it comes to iconic Disneyland rides, Space Mountain reigns
          supreme as one of the most popular and beloved attractions in the
          park. Nestled in Tomorrowland, this indoor roller coaster has been
          thrilling visitors since it first opened in 1977. With its futuristic
          theme, high-speed thrills, and captivating ambiance, Space Mountain
          has remained a favorite among Disneyland guests for decades. Let’s
          take a closer look at what makes Space Mountain such a standout
          attraction and why it continues to captivate fans year after year.
        </Paragraph>
        <Paragraph>
          When it comes to iconic Disneyland rides, Space Mountain reigns
          supreme as one of the most popular and beloved attractions in the
          park. Nestled in Tomorrowland, this indoor roller coaster has been
          thrilling visitors since it first opened in 1977. With its futuristic
          theme, high-speed thrills, and captivating ambiance, Space Mountain
          has remained a favorite among Disneyland guests for decades. Let’s
          take a closer look at what makes Space Mountain such a standout
          attraction and why it continues to captivate fans year after year.
        </Paragraph>
        <BlogImage src={Img} alt={"Balboa Funzone"} />
        <Heading content="The Space Mountain Experience" />
        <Paragraph>
          What sets Space Mountain apart from other roller coasters is its
          immersive theme. From the moment you enter the queue, you’re
          transported into a world of futuristic space travel. The queue winds
          through dark corridors with flashing lights and cosmic visuals,
          building anticipation for the journey ahead. Space-age music plays in
          the background, setting the tone for the adventure. Once aboard your
          rocket-shaped ride vehicle, the real thrill begins. The roller coaster
          takes place entirely indoors, with the track hidden from view. The
          darkness, combined with the flashing lights and stars projected
          throughout the ride, makes it impossible to anticipate the twists and
          turns, creating an experience that feels faster and more intense than
          its actual speed. The ride reaches up to 35 miles per hour, but the
          darkness makes it feel much faster. Throughout the ride, guests race
          through simulated outer space, dodging meteors, flying past distant
          planets, and diving into pitch-black tunnels. The disorienting effect
          of the darkness combined with the fast-paced twists and drops make for
          a thrilling ride every time.
        </Paragraph>
        <Heading content="Why space mountain is favourate?" />
        <List
          description="Space Mountain’s enduring popularity comes down to several factors that make it unique within Disneyland:"
          type="unordered"
          points={[
            "Timeless Appeal: While some Disneyland attractions are rooted in nostalgia, Space Mountain feels perpetually modern. Its space theme taps into both childhood dreams of space exploration and adult fascination with the unknown. The ride’s futuristic vibe and high-tech design ensure it never feels outdated, even after more than four decades of operation.",
            "Thrill Factor: Space Mountain offers just the right level of thrill. It’s fast, exciting, and unpredictable, but not too extreme, making it suitable for both older kids and adults who want an adrenaline rush without the intensity of more extreme roller coasters. It strikes the perfect balance between being thrilling yet family-friendly.",
            "Immersive Experience: From the queue to the ride itself, Space Mountain is all about creating an immersive experience. The dark, space-themed environment, combined with the music, sound effects, and visuals, transports guests to another world. The ride’s indoor setting adds an extra layer of mystery and excitement, making it feel like a true adventure.",
            "Classic Disney Magic: Space Mountain embodies the classic Disney magic that has made the park so beloved. It combines cutting-edge technology with timeless storytelling, creating an experience that appeals to guests of all ages. The ride’s attention to detail, from the theming to the special effects, showcases Disney’s commitment to creating memorable experiences for its visitors.",
          ]}
        />
      </div>
      <div className="py-7 flex max-w-[836px] mx-auto gap-2">
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
      <div className="flex justify-between mx-auto max-w-[836px]">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-[#979797] text-[16px]">
            <Heart size={16} color="#979797" /> 24
          </div>
          <div className="flex items-center gap-1 text-[#979797] text-[16px]">
            <MessageSquareText size={16} color="#979797" /> 24
          </div>
        </div>
        <div className="flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(`https://yourwebsite.com/blog/0`);
              toast({
                description: `Link to xyz copied to clipboard!`,
              });
            }}
          >
            <Share2 size={16} color="#979797" />
          </button>
        </div>
      </div>
      <CommentSection />
    </div>
  );
}
