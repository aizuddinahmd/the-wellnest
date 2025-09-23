"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero4() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const shrinkThreshold = heroHeight * 0.2; // Start shrinking after 30% of scroll

      setIsScrolled(scrollPosition > shrinkThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#D6A496]">
      <section
        ref={heroRef}
        className={`relative bg-[#D6A496] h-full md:h-screen w-full overflow-hidden duration-800 ease-in-out
          ${isScrolled ? "scale-95" : "scale-100"}
        `}
      >
        {/* Background image */}
        <Image
          src="/pilates/pilates-1.jpg"
          alt="Hero Pilates"
          fill
          priority
          className={`object-cover h-full w-full ${
            isScrolled ? "rounded-b-3xl" : "rounded-none"
          }`}
        />
        {/* Dark overlay for readability */}
        <div className="absolute md:rounded-b-3xl rounded-none inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Main content */}
          <main className="flex flex-col items-center justify-center flex-1 px-4 text-left">
            <h2 className="text-white font-semibold tracking-widest text-xs md:text-base mb-2 uppercase">
              FEEL BETTER AND LIVE LONGER
            </h2>
            <h1 className="text-white text-center  font-extrabold text-3xl md:text-6xl leading-tight mb-8 max-w-2xl">
              From skin to core, <br />
              We help you restore
            </h1>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <button className="bg-white text-sand-beige rounded-full px-8 py-4 text-lg font-semibold w-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Book now
              </button>
            </div>
          </main>
        </div>
      </section>
      {/* Pill-shaped tags: static below hero on mobile, absolute overlay on desktop */}
      <div
        className={`relative flex bg-black/90 md:bg-transparent items-start md:items-center gap-4 px-2 py-6 md:py-6 w-full md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 flex-wrap md:justify-center md:gap-3 md:px-4 md:pb-0 md:w-4xl lg:w-7xl md:z-20 transition-all duration-800 ease-in-out
          ${isScrolled ? "scale-95" : "scale-100"}
        `}
      >
        {[
          "Maximize healthspan",
          "Increase lifespan",
          "Build lean muscle",
          "Reduce body fat",
          "Optimize hormone levels",
          "Reduce aging rate",
          "Improve sleep quality",
          "Enhance cognitive performance",
          "Boost sexual wellness",
          "Regrow hair",
          "Lower cancer risk",
          "Strengthen heart health",
        ].map((tag) => (
          <span
            key={tag}
            className=" bg-white/20 text-white rounded-lg px-2 py-2 text-sm font-semibold shadow-md backdrop-blur-md text-center"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
