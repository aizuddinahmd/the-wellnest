import HeroSkin from "@/components/HeroSkin";
import Navbar from "@/components/navbar";
// import ListofCourses from "@/components/ListofCourses";
import ListofServices from "@/components/ListofServices";
import { SKIN_SERVICES } from "../services/serviceData";

// Skin-specific course data
// const skinCourses = [
//   {
//     id: 1,
//     title: "HydraFacial Treatment",
//     image: "/skin/skin-1.png",
//     rating: 4.8,
//     reviews: 32,
//     duration: 60,
//     level: "All skin types",
//     description:
//       "Deep cleansing, exfoliation, extraction, and hydration in one treatment. Perfect for all skin types and concerns.",
//   },
//   {
//     id: 2,
//     title: "Chemical Peel",
//     image: "/skin/skin-1.png",
//     rating: 4.9,
//     reviews: 28,
//     duration: 45,
//     level: "Moderate to advanced",
//     description:
//       "Professional chemical peel to improve skin texture, reduce fine lines, and reveal brighter, smoother skin.",
//   },
//   {
//     id: 3,
//     title: "Microneedling",
//     image: "/skin/skin-1.png",
//     rating: 4.7,
//     reviews: 24,
//     duration: 75,
//     level: "All skin types",
//     description:
//       "Stimulate collagen production and improve skin texture with our advanced microneedling treatment.",
//   },
//   {
//     id: 4,
//     title: "LED Light Therapy",
//     image: "/skin/skin-1.png",
//     rating: 4.6,
//     reviews: 19,
//     duration: 30,
//     level: "All skin types",
//     description:
//       "Red and blue light therapy to reduce inflammation, promote healing, and improve overall skin health.",
//   },
//   {
//     id: 5,
//     title: "Dermaplaning",
//     image: "/skin/skin-1.png",
//     rating: 4.8,
//     reviews: 21,
//     duration: 45,
//     level: "All skin types",
//     description:
//       "Gentle exfoliation technique that removes dead skin cells and fine facial hair for smoother, brighter skin.",
//   },
//   {
//     id: 6,
//     title: "Custom Facial",
//     image: "/skin/skin-1.png",
//     rating: 5.0,
//     reviews: 35,
//     duration: 90,
//     level: "Personalized",
//     description:
//       "Tailored facial treatment designed specifically for your skin type and concerns. Includes consultation and custom products.",
//   },
// ];

// Skin-specific tabs
// const skinTabs = [
//   { label: "All Treatments", value: "all" },
//   { label: "Facial Treatments", value: "facial" },
//   { label: "Advanced Treatments", value: "advanced" },
// ];

export default function SkinPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroSkin />
      <ListofServices services={SKIN_SERVICES} />
      {/* <ListofCourses
        courses={skinCourses}
        title="Skin Treatments"
        tabs={skinTabs}
        showFilters={true}
      /> */}
    </section>
  );
}
