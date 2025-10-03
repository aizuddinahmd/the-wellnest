import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-[#d2d8be] overflow-hidden rounded-3xl mb-16 mt-24">
      {/* Curve on the right */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <Image
          src={`/skin/skin-1.png`}
          alt="Hero Pilates"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl md:ml-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#41484e] font-serif">
          Skin Care for Health and Wellness
        </h1>
        <p className="text-lg text-[#41484e] max-w-lg">
          At The Wellnest, skin care is more than beauty — it’s health and
          confidence. Every journey starts with a detailed consultation, where
          we explain and customize treatments to your unique needs in a safe,
          Muslimah-friendly space.
        </p>
        <button className="bg-[#d6a496] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#d6a496]/60 transition-colors hover:cursor-pointer">
          Get Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;
