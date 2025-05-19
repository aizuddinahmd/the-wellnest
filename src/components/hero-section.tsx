"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const shrinkThreshold = heroHeight * 0.3; // Start shrinking after 30% of scroll

      setIsScrolled(scrollPosition > shrinkThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className={`
        relative w-full transition-all duration-300 ease-in-out
        ${isScrolled ? "h-[60vh]" : "h-screen"}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 to-primary-950/90" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1
          className={`
            mb-4 font-bold tracking-tight text-white transition-all duration-300
            ${isScrolled ? "text-4xl" : "text-6xl"}
          `}
        >
          Welcome to The WellNest
        </h1>
        <p
          className={`
            max-w-2xl text-white/90 transition-all duration-300
            ${isScrolled ? "text-base" : "text-xl"}
          `}
        >
          Your journey to wellness starts here. Discover a holistic approach to
          health and well-being that nurtures your mind, body, and soul.
        </p>
      </div>
    </div>
  );
}
