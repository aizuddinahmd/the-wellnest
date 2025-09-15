import HeroPilates from "@/components/HeroPilates";
import Navbar from "@/components/navbar";

export default function HealthWellnessPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroPilates />
      {/* <ListofCourses /> */}
    </section>
  );
}
