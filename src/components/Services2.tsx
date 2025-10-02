"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SKIN_SERVICES,
  BODY_SERVICES,
  HEALTH_WELLNESS_SERVICES,
} from "@/app/services/serviceData";

// data moved to shared module

export default function Services2() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  // Combine all services
  const allServices = [
    ...SKIN_SERVICES,
    ...BODY_SERVICES,
    ...HEALTH_WELLNESS_SERVICES,
  ];
  const maxIndex = allServices.length - visible;

  const handlePrev = () => setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  const handleNext = () => setIndex((i) => (i < maxIndex ? i + 1 : 0));

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2340] mb-4 md:mb-0">
            The Best Quality
            <br />
            Service You Can Get
          </h2>
          <p className="text-gray-500 max-w-md">
            We use only the best quality materials on the market in order to
            provide the best products to our patients
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-6 justify-center">
            {allServices.slice(index, index + visible).map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col items-center bg-white rounded-2xl p-8 w-full max-w-xs min-h-[320px] border transition
                  ${
                    i === 1
                      ? "shadow-xl border-none z-10"
                      : "border-gray-200 shadow-sm z-0"
                  }
                `}
              >
                <div className="w-16 h-16 rounded-full bg-[#f5f8fd] flex items-center justify-center mb-4 shadow">
                  <Image src={s.icon} alt={s.title} width={40} height={40} />
                </div>
                <h3 className="text-lg font-bold text-[#1a2340] mb-2 text-center">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-base mb-6 text-center">
                  {s.desc}
                </p>
                {/* <button
                  className={`rounded-full px-6 py-2 font-medium flex items-center gap-2 transition
                    ${
                      i === 1
                        ? "bg-[#2563eb] text-white shadow hover:bg-[#1d4ed8]"
                        : "border border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#2563eb] hover:text-white"
                    }
                  `}
                >
                  know this more <span className="text-lg">&rarr;</span>
                </button> */}
              </div>
            ))}
          </div>
          {/* Carousel navigation */}

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl shadow hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl shadow hover:bg-gray-100 transition"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
