import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import WhyWebOnRock from "@/components/WhyWebOnRock";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <FeaturedWork />
      <WhyWebOnRock />
      <WorkProcess />
      <HappyClients/>
      <Testimonials />
      <LeadMagnet />
      <Footer />
    </div>
  );
}