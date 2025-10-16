import Image from "next/image";

export default function CTA() {
  return (
    <section
      className="w-full py-16 px-4 rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: "url('/pilates/pilates-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-4xl font-bold text-white mb-8 text-center font-serif">
          Book Your Session Today
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="bg-[#d6a496] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#d6a496]/80 transition-colors hover:cursor-pointer shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
