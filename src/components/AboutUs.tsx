import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-16 max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Top Left: Large Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/services/fat-melting.png"
            alt="pilates"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Top Right: About Card */}
        <div className="rounded-2xl bg-[#d6a496] text-white p-8 flex flex-col justify-center min-h-[300px]">
          <h3 className="text-lg font-semibold mb-4">ABOUT THE WELLNEST</h3>
          <p className="text-base leading-relaxed">
            The Wellnest is a twin brand of the renowned Klinik Dr Twins,
            founded by two twin doctors. Inspired to go beyond just treating
            illness, we created The Wellnest as a sanctuary for holistic
            wellness. Our vision is to empower you to achieve lasting health and
            beauty by nurturing your body both inside and out.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Middle Left: Small Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/face/face-1.png"
            alt="Pilates"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Middle Center: Logo/Icon */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/skin/skin-1.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-cover w-full h-full "
          />
        </div>
        {/* Middle Right: Small Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/services/medical-facial.png"
            alt="clinic"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Bottom Left: Large Image */}
        <div className="rounded-2xl bg-[#d6a496] text-white p-8 flex flex-col justify-center min-h-[300px]">
          <h3 className="text-lg font-semibold mb-4">OUR MISSION</h3>
          <p className="text-base leading-relaxed">
            Our mission is to provide expert, medically-inspired care in a
            calming environment. We&apos;re dedicated to helping you achieve not
            just beautiful, healthy skin, but also a strong, balanced body
            through the practice of Pilates. We believe true confidence comes
            from a sense of well-being that starts with a proactive, holistic
            approach to self-care.
          </p>
        </div>
        {/* Bottom Right: About Card */}
        <div className="rounded-2xl overflow-hidden border border-gray-300 hover:cursor-pointer">
          <Image
            src="/services/fitness.png"
            alt="Team"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
