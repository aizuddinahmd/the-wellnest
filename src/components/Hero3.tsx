"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero3() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const tags = [
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
  ];

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
    <section
      ref={heroRef}
      className={`relative md:h-screen h-full flex flex-col justify-start lg:justify-center bg-[#fef9f6] overflow-hidden transition-all duration-800 ease-in-out
          ${isScrolled ? "scale-95" : "scale-100"}
        `}
    >
      {/* Background image absolutely positioned */}
      <div
        className={`
          absolute inset-0 z-0 md:h-full h-screen w-full`}
      >
        <Image
          src={`/hero-1.png`}
          alt="Hero Curve"
          fill
          className={`object-cover h-full w-full md:h-full md:w-full ${
            isScrolled ? "rounded-3xl" : "rounded-none"
          }`}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl" />
      </div>
      {/* Content centered and above the image */}
      <div className="relative z-10 flex flex-col gap-6 md:px-8 lg:py-16 w-full md:max-w-2xl md:mx-12 px-4">
        <h2 className="text-base md:text-lg font-semibold text-[#44454a] max-w-lg">
          Feel better and live longer
        </h2>
        <h1 className="text-xl md:text-6xl font-extrabold leading-tight text-[black] bg-clip-text text-left">
          Empowering Women<span className="block">Nurturing Children</span>
        </h1>

        <button className="bg-[#9eaf7c] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#a97a3a] transition-colors">
          Get Appointment
        </button>
      </div>
      {/* Tags overlay at the bottom of the hero section */}
      <div className="md:absolute bottom-16 py-4 left-1/2 -translate-x-1/2 md:flex-row md:flex md:flex-wrap justify-center gap-4 px-4 w-sm lg:w-6xl xl:w-7xl z-20">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-transparent text-white rounded-2xl px-6 py-2 text-sm font-medium shadow-md backdrop-blur-sm whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
