"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/app/services/serviceData";

// data moved to shared module

export default function ListofServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {SERVICES.map((service) => (
        <Card
          key={service.title}
          className="border-[#bcbcbc] bg-white p-8 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 mb-4 md:mb-0 md:mr-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="font-bold text-xl mb-2 text-[#18181a]">
                {service.title}
              </h3>
              <p
                className="text-gray-700 text-base mb-6"
                dangerouslySetInnerHTML={{ __html: service.desc }}
              />
              <button className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium w-full mt-auto hover:bg-[#a97a3a] transition-colors">
                {service.button}
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
