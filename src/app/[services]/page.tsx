"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { getAllServices, getServiceCategory } from "@/lib/serviceUtils";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceName = decodeURIComponent(params.services as string);

  // Get all services using utility function
  const allServices = getAllServices();

  // Find the service by title
  const service = allServices.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === serviceName
  );

  // Determine the category of the current service
  const activeCategory = service ? getServiceCategory(service.title) : null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-600">
            The service you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center min-h-screen bg-[#f5e8da] px-4 py-12">
      <Navbar activeCategory={activeCategory || undefined} />

      <div className="max-w-7xl w-full mt-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-[#8b7355] mb-2 italic">
              {service.title}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#8b7355] mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-[#8b7355] leading-relaxed mb-6">
              {service.desc}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={service.icon}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-400 mb-12"></div>

        {/* How We Can Help Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#8b7355] mb-8">
            How we can help?
          </h2>

          {/* Accordion for Services */}
          <div className="space-y-4">
            {service.services?.map((subService, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-light text-[#8b7355]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                    <span className="text-lg font-normal text-[#8b7355]">
                      {subService.title}
                    </span>
                  </div>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="pb-6 pl-14 pr-4">
                    <p className="text-lg text-[#8b7355] leading-relaxed">
                      {subService.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
