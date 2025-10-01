"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceItem } from "@/app/types/service";

interface ListofServicesProps {
  services: ServiceItem[];
}

export default function ListofServices({ services }: ListofServicesProps) {
  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {services.map((service) => (
        <Link
          key={service.title}
          href={`/${createSlug(service.title)}`}
          className="block"
        >
          <Card className="border-[#bcbcbc] bg-[#f5e8da] p-8 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer h-full">
            <CardContent className="flex flex-col md:flex-col items-center gap-6 p-0">
              <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0 rounded-2xl overflow-hidden w-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="flex-1 flex flex-col items-center w-full">
                <h3 className="font-bold text-xl mb-2 text-[#18181a] text-center">
                  {service.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
