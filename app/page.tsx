import Banner from "./components/Banner";
import ServiceSection from "./components/ServiceSection";
import TechnologySection from "./components/TechnologySection";
import OurPartners from "./components/OurPartners";
import ContactSection from "./components/ContactSection";
import StatsSection from "./components/StatsSection";
import Process from "./components/Process";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className=" flex flex-col gap-12 md:gap-20">
      <Banner />
      <ServiceSection />
      <OurPartners />
      <TechnologySection />
      <TestimonialSection />
      <StatsSection />
      <ContactSection />
    </main>
  );
}
