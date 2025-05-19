"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero3() {
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
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col items-center justify-center bg-[#fef9f6] overflow-hidden"
    >
      {/* Background image absolutely positioned */}
      <div
        className={`
          hidden md:block absolute inset-0 z-0 h-full w-full transition-all duration-800 ease-in-out
          ${isScrolled ? "scale-90" : "scale-100"}
        `}
      >
        <Image
          src={`/hero-1.png`}
          alt="Hero Curve"
          fill
          className={`object-cover h-full w-full ${
            isScrolled ? "rounded-3xl" : "rounded-none"
          }`}
        />
      </div>
      {/* Content centered and above the image */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[black] bg-clip-text text-center">
          Empowering Women<span className="block">Nurturing Children</span>
        </h1>
        <p className="text-lg text-[#44454a] max-w-lg">
          Klinik Dr Twins merupakan klinik perubatan yang sesuai untuk seisi
          keluarga. Kami menawarkan rawatan yang komprehensif serta dilengkapi
          dengan peralatan terbaru dan canggih.
        </p>
        <button className="bg-[#9eaf7c] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#a97a3a] transition-colors">
          Get Appointment
        </button>
      </div>
    </section>
  );
}
