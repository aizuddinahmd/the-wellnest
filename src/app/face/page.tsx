import Footer from "@/components/Footer";
import HeroFace from "@/components/HeroFace";
import Navbar from "@/components/navbar";

export default function FacePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroFace />
      {/* <ListofCourses /> */}
      <Footer />
    </section>
  );
}
