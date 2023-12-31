import Banner from "./components/Banner";
import ServiceSection from "./components/ServiceSection";
import TechnologySection from "./components/TechnologySection";
import OurPartners from "./components/OurPartners";
import ContactSection from "./components/ContactSection";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" flex flex-col gap-12 md:gap-20">
      <Head>
        <title>cloudsnepalweb | Services Section</title>
        <meta
          name="description"
          content="Cloudnepalweb is the software provider company in Nepal, It has been providing services like website , mobile apps , web apps development services. If you want to make website , mobile apps and webapps please contact at (+977) 9766896866 or you can visit location at Putalisadak, Kathmandu, Nepal or even you can mail at webcloudsnepal@gmail.com."
        />
      </Head>
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
