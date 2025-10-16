import FeaturesRight from "@/components/FeaturesRight";
import AboutUs from "@/components/AboutUs";
import ListofTestimonials from "../components/ListofTestimonials";
import Footer from "@/components/Footer";
import MovingSign from "@/components/MovingSign";
import Hero4 from "@/components/hero4";
import Navbar from "@/components/navbar";
import Packages from "@/components/Packages";
import AboutUs2 from "@/components/AboutUs2";
import CTA from "@/components/CTA";
// import Memberships from "@/components/Memberships";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero4 />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#f5e8da] px-4 py-12">
        <AboutUs />
        <MovingSign />
        <FeaturesRight />
        {/* <FeaturesLeft /> */}
        <AboutUs2 />
        <Packages />
        {/* <Memberships /> */}
        <ListofTestimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
