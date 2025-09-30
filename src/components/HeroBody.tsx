import Image from "next/image";

function HeroBody() {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-[#d2d8be] overflow-hidden rounded-3xl mb-16">
      {/* Curve on the right */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <Image
          src={`/hero-1.png`}
          alt="Hero Body"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl md:ml-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#41484e] font-serif">
          Body Treatments for Health and Wellness
        </h1>
        <p className="text-lg text-[#41484e] max-w-lg">
          Transform your body with our comprehensive range of treatments
          designed to address stretch marks, excessive sweating, and weight
          management. Our expert team provides personalized solutions to help
          you achieve your health and wellness goals.
        </p>
        <button className="bg-[#9eaf7c] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#a97a3a] transition-colors">
          Get Appointment
        </button>
      </div>
    </section>
  );
}

export default HeroBody;
