import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-[#d2d8be] overflow-hidden rounded-3xl mb-16">
      {/* Curve on the right */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <Image
          src={`/face-1.png`}
          alt="Hero face"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl md:ml-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#41484e] font-serif">
          What Can You Expect
        </h1>
        <p className="text-lg text-[#41484e] max-w-lg">
          Your journey begins with a comprehensive Wellness Consultation.
          We&apos;ll sit down with you to discuss your specific skin and fitness
          goals. Based on this, we&apos;ll help you schedule your first
          signature facial and book an introductory private Pilates session.
          This ensures your program is perfectly tailored to your needs right
          from the start.
        </p>
        <button className="bg-[#d6a496] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#d6a496]/60 transition-colors">
          Get Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;
