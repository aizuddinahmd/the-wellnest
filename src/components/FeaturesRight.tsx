import Image from "next/image";

function FeaturesRight() {
  return (
    <section className="w-full flex flex-col gap-4 bg-[#f5e8da] mb-4">
      <div className="w-full py-16 flex flex-col md:flex-row-reverse items-center justify-between gap-12 rounded-3xl sticky top-8 bg-[#d2d8be]">
        {/* Right: Main image with overlay */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden">
            <Image
              src="/features/features-5.jpeg"
              alt="Main"
              width={480}
              height={480}
              className="object-cover w-full h-full rounded-t-full"
            />
          </div>
          {/* Floating card */}
          {/* <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
            <span className="text-[#d2d8be] font-semibold">
              We offer a wide range of services to help
            </span>
          </div> */}
        </div>
        {/* Left: Text and small images */}
        <div className="flex-1 flex flex-col gap-6 items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#386963] leading-tight">
            Glow & Grow
            <br />
            Begins Here
          </h2>
          <p className="text-lg text-[#386963] max-w-md">
            At The Wellnest, we believe beauty and wellness go hand in hand. Our
            dedicated doctors and instructors are here to guide you on a journey
            to look good, feel good, and live well
          </p>
          <button className="bg-[#386963] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#386963]/60 transition-colors">
            Learn More <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#d2d8be] rounded-3xl sticky top-8">
        {/* Left: Main image with overlay */}
        <div className="relative flex-1 flex justify-center items-center w-full">
          <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden mx-auto">
            <Image
              src="/features/features-4.jpeg"
              alt="Main"
              width={480}
              height={480}
              className="object-cover w-full h-full rounded-t-full"
            />
          </div>
          {/* Floating card */}
          {/* <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
            <span className="text-[#c18e4a] font-semibold">
              We offer a wide range of services to help
            </span>
          </div> */}
        </div>
        {/* Right: Text and small images */}
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#386963] leading-tight">
            Skin solutions,
            <br />
            posture perfection,
            <br />
            inner balance
          </h2>
          <p className="text-lg text-[#386963] max-w-md">
            At The Wellnest, we offer a wide range of skin treatments — from
            acne and scar solutions to managing excessive sweating and
            non-invasive fat melting treatments. Alongside, our Pilates classes
            support posture correction and mental well-being, creating a
            holistic approach to health, beauty, and confidence
          </p>
          <button className="bg-[#386963] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#386963]/60 transition-colors">
            Learn More <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesRight;
