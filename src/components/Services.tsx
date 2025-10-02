"use client";

import Image from "next/image";
import {
  SKIN_SERVICES,
  BODY_SERVICES,
  HEALTH_WELLNESS_SERVICES,
} from "@/app/services/serviceData";

// data moved to shared module

function ServicesGrid() {
  // Combine all services
  const allServices = [
    ...SKIN_SERVICES,
    ...BODY_SERVICES,
    ...HEALTH_WELLNESS_SERVICES,
  ];

  return (
    <section className="w-full my-16 px-0" id="perkhidmatan">
      <h2 className="text-3xl text-[#010107] md:text-4xl font-bold mb-8 text-center">
        Perkhidmatan Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4">
        {allServices.slice(0, 8).map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm min-h-[240px] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-[#c18e4a] cursor-pointer"
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={72}
              height={72}
              className="object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-[#18181a] mb-2 text-center">
              {f.title}
            </h3>
            <p
              className="text-gray-700 text-base mb-6 text-center"
              dangerouslySetInnerHTML={{ __html: f.desc }}
            />
            {/* <button className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium w-full mt-auto hover:bg-[#a97a3a] transition-colors">
              {f.button}
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;
