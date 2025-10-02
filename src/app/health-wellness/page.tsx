import HeroPilates from "@/components/HeroPilates";
import Navbar from "@/components/navbar";
import ListofServices from "@/components/ListofServices";
import { HEALTH_WELLNESS_SERVICES } from "@/app/services/serviceData";
import Footer from "@/components/Footer";

export default function HealthWellnessPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroPilates />
      <ListofServices services={HEALTH_WELLNESS_SERVICES} />
      <Footer />
    </section>
  );
}
