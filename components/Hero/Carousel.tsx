"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Search } from "react-feather";
import "./Hero.css"
import { Query } from "../Home/HomeTypes";

export default function HeroCarousel({setQuery, query}:{query:Query, setQuery:React.Dispatch<React.SetStateAction<Query>>}) {
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => setQuery({...query, title:e.target.value});
  const handleClick = () => {
    const element = document.getElementById("event_section_scroll_to");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="w-full h-screen">
            <div className="w-full h-screen hero_container"></div>
        </CarouselItem>
        <CarouselItem className="w-full h-screen">
            <div className="w-full h-screen hero_container_two"></div>
        </CarouselItem>
        <CarouselItem className="w-full h-screen">
            <div className="w-full h-screen hero_container_three"></div>
        </CarouselItem>
      </CarouselContent>
      <div className="hero_text flex flex-col items-center w-full max-w-[900px]">
        <p className="text-4xl lg:text-5xl tracking-wide font-[600] ">
          Looking for a new adventure this weekend in Orange County, California?
        </p>
        <div className="bg-white rounded-md py-1 flex justify-between pl-2 pr-1 gap-2 mt-5 w-10/12">
          <div className="flex gap-2 w-full items-center">
            <Search className="text-gray-400 text-sm hidden md:inline-block" />
            <input
              type="text"
              className="text-black outline-none md:border-none"
              placeholder="Search for adventures..."
              value={query.title}
              onChange={handleSearch}
            />
          </div>
          <button onClick={handleClick} className="bg-orange-500 inline-block transition-all duration-75 ease-in px-2 py-1 rounded-md hover:bg-orange-600">
            Search
          </button>
        </div>
      </div>
    </Carousel>
  );
}
