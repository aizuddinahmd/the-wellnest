import HeroSkin from "@/components/HeroSkin";
import Navbar from "@/components/navbar";

export default function SkinPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroSkin />
      {/* <ListofCourses /> */}
    </section>
  );
}
