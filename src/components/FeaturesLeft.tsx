import Image from "next/image";

function Features() {
  return (
    <section className="flex flex-col gap-12 w-full bg-[#ffffff]">
      <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#fef9f6] rounded-3xl sticky top-8">
        {/* Left: Main image with overlay */}
        <div className="relative flex-1 flex justify-center items-center w-full">
          <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden mx-auto">
            <Image
              src="/features/features-1.png"
              alt="Main"
              width={480}
              height={480}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Floating card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
            <span className="text-[#c18e4a] font-semibold">
              We offer a wide range of services to help
            </span>
          </div>
        </div>
        {/* Right: Text and small images */}
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18181a] leading-tight">
            Your Beauty And
            <br />
            Success Starts Here
          </h2>
          <p className="text-lg text-[#44454a] max-w-md">
            We offer a wide range of services to help you look and feel your
            best. Our experienced stylists are dedicated
          </p>
          <button className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#a97a3a] transition-colors">
            Learn More <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="w-full py-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#fef9f6] rounded-3xl sticky top-8">
        {/* Left: Main image with overlay */}
        <div className="relative flex-1 flex justify-center items-center w-full">
          <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden mx-auto">
            <Image
              src="/features/features-1.png"
              alt="Main"
              width={480}
              height={480}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Floating card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
            <span className="text-[#c18e4a] font-semibold">
              We offer a wide range of services to help
            </span>
          </div>
        </div>
        {/* Right: Text and small images */}
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18181a] leading-tight">
            Your Beauty And
            <br />
            Success Starts Here
          </h2>
          <p className="text-lg text-[#44454a] max-w-md">
            We offer a wide range of services to help you look and feel your
            best. Our experienced stylists are dedicated
          </p>
          <button className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#a97a3a] transition-colors">
            Learn More <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
