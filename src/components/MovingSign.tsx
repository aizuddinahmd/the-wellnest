export default function MovingSign() {
  const tags1 = [
    "Automated Diagnostics",
    "Automated Bloodwork",
    "Platform Access",
    "Advanced Diagnostics",
    "Personal Health Coach",
    "Prescription Wellness",
    "Hormone Optimization",
    "Wholesale Products",
    "Custom Protocols",
    "In-app Doctors",
    "Prescription Delivery",
    "Healthcare Consultation",

    // ...add more as needed
  ];

  //   const tags2 = [
  //     "Automated Diagnostics",
  //     "Automated Bloodwork",
  //     "Platform Access",
  //     "Advanced Diagnostics",
  //     "Personal Health Coach",
  //     "Prescription Wellness",
  //     "Hormone Optimization",
  //     "Wholesale Products",
  //     "Custom Protocols",
  //     "In-app Doctors",
  //     // ...add more as needed
  //   ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="flex-col w-full inline-flex flex-nowrap overflow-hidden gap-8">
        {[0, 1, 2].map((_, i) => (
          <ul
            key={i}
            className={`flex items-center justify-center ${
              i === 1
                ? "animate-infinite-scroll-reverse"
                : "animate-infinite-scroll"
            }`}
            aria-hidden={i > 0 ? "true" : undefined}
          >
            {tags1.map((tag, idx) =>
              tag ? (
                <li key={tag + idx} className="mx-4">
                  <span className="inline-block rounded-2xl bg-sky-50 text-blue-300 px-8 py-4 text-2xl font-semibold whitespace-nowrap hover:bg-black hover:text-white transition-all duration-300">
                    {tag}
                  </span>
                </li>
              ) : null
            )}
          </ul>
        ))}
      </div>
    </section>
  );
}
