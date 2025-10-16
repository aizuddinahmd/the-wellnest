"use client";

import Image from "next/image";

interface Doctor {
  name: string;
  specialty: string;
  description: string;
  image: string;
  years: number;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Amalina",
    specialty: "Resident Doctor",
    description: "MBbCh (Tanta,Egypt)",
    image: "/instructor/dramalina.png",
    years: 8,
  },
  {
    name: "Amal",
    specialty: "Instructor",
    description: "Certified Pilates Instructor",
    image: "/instructor/amal.png",
    years: 5,
  },
  {
    name: "Amira",
    specialty: "Instructor",
    description: "Certified Pilates Instructor",
    image: "/instructor/amira.png",
    years: 10,
  },
  {
    name: "Yanie",
    specialty: "Instructor",
    description: "Certified Pilates Instructor",
    image: "/instructor/yanie.png",
    years: 8,
  },
  {
    name: "Atikah",
    specialty: "Instructor",
    description: "Certified Pilates Instructor",
    image: "/instructor/atikah.png",
    years: 5,
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      className={`group relative flex flex-col items-center rounded-t-full bg-white transition-all duration-300 overflow-hidden min-w-[280px] max-w-[320px] w-full hover:scale-105`}
    >
      {/* Doctor Image */}
      <div className="w-full h-full flex items-center justify-center bg-white hover:bg-[#ffd1dc]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={360}
          height={360}
          className="w-7xl h-7xl"
        />
      </div>
      <div className="min-w-[260px] max-w-[320px] bottom-0 p-5 flex flex-col gap-1 bg-opacity-90 rounded-xl  transition-all duration-300 backdrop-blur-xs bg-white m-2">
        <div className="text-lg font-semibold text-[#23235b]">
          {doctor.name}
        </div>
        <div className="text-sm text-[#4f7fff] font-medium">
          {doctor.specialty}
        </div>
        <div className="text-xs text-[#44454a] mb-2">{doctor.description}</div>
      </div>
    </div>
  );
}

export default function AboutUs2() {
  // const index = 0;
  // const visible = 5;

  return (
    <section className="w-full bg-[#f5f7fd] py-16 px-4 rounded-3xl">
      <div className="text-4xl font-bold text-[#23235b] mb-8 text-center font-serif">
        Meet Our Instructors
      </div>
      <div className="md:max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6">
        {doctors.map((doctor, index) => (
          <DoctorCard key={`doctor-${index}`} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
