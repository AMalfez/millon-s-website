"use client";

import "./Hero.css"

export default function HeroCarousel() {
  const handleClick = () => {
    const element = document.getElementById("event_section_scroll_to");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="w-full h-[600px]">
      <div className="w-full h-full hero_container"></div>
      <div className="hero_text flex flex-col items-center w-full max-w-[900px]">
        <p className="text-4xl lg:text-5xl tracking-wide font-[600] ">
          Looking for a new adventure this weekend in Orange County, California?
        </p>
        <div className="rounded-md py-1 flex justify-between pl-2 pr-1 gap-2 mt-5 w-10/12">
          <div className="flex justify-center w-full items-center">
            <div onClick={handleClick} className="flex cursor-pointer flex-col items-center mt-5">
              <p className="text-lg">Scroll down</p>
              <div className="animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
