import HeroBody from "@/components/HeroBody";
import Navbar from "@/components/navbar";
import ListofServices from "@/components/ListofServices";
import { BODY_SERVICES } from "@/app/services/serviceData";

export default function BodyPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#d2d8be] px-4 py-12">
      <Navbar />
      <HeroBody />
      <ListofServices services={BODY_SERVICES} />
    </section>
  );
}
