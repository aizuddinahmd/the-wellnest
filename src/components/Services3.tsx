"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SKIN_SERVICES,
  BODY_SERVICES,
  HEALTH_WELLNESS_SERVICES,
} from "@/app/services/serviceData";

// data moved to shared module

export default function Services3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Combine all services and take first 6
  const allServices = [
    ...SKIN_SERVICES,
    ...BODY_SERVICES,
    ...HEALTH_WELLNESS_SERVICES,
  ].slice(0, 6);

  return (
    <section className="w-full bg-[#f6f6f8] py-12 px-2 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-[#18181a] mb-8 px-4">
        Our services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {allServices.map((service, i) => {
          // For the center card in the second row, show the description if open
          if (openIndex === i) {
            return (
              <div
                key={service.title}
                className={`relative flex flex-col justify-center items-center bg-white rounded-2xl p-6 min-h-[220px] shadow transition
                  ${i === 4 ? "rounded-bl-[2.5rem]" : ""}
                  ${i === 2 ? "rounded-tr-[2.5rem]" : ""}
                `}
              >
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#18181a] text-white flex items-center justify-center text-xl"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <p className="text-gray-700 text-base text-center">
                  {service.desc}
                </p>
              </div>
            );
          }

          // Normal service card
          return (
            <div
              key={service.title}
              className={`relative group overflow-hidden min-h-[220px] flex items-end rounded-2xl shadow transition
                ${i === 0 ? "rounded-tl-[2.5rem]" : ""}
                ${i === 2 ? "rounded-tr-[2.5rem]" : ""}
                ${i === 3 ? "rounded-bl-[2.5rem]" : ""}
                ${i === 5 ? "rounded-br-[2.5rem]" : ""}
              `}
              style={{ background: "#fff" }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover w-full h-full"
                style={{ zIndex: 1, opacity: 0.85 }}
              />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-white text-lg font-semibold drop-shadow">
                  {service.title}
                </span>
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 text-[#18181a] flex items-center justify-center text-2xl z-10 border border-[#e5e5e5] hover:bg-[#f6f6f8]"
                onClick={() => setOpenIndex(i)}
                aria-label="More"
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
