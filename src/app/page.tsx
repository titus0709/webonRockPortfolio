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
import ContactForm from "@/components/StartProject";
import VideoTestimonial from "@/components/VideoTestimonialSection";
import { WhatsAppButton } from "@/components/whatsapp-button"



export default function Page() {
  return (
    <div className="min-h-screen bg-black/95">
      <Header />
      <Hero />
      <VideoTestimonial />
      <HappyClients/>
      <Services />
      <FeaturedWork />
      <WhyWebOnRock />
      
      <WorkProcess />
      <HappyClients/>
      <ContactForm />
      <WhatsAppButton/>
      {/* <Testimonials /> */}
      {/* <LeadMagnet /> */}
      <Footer />
    </div>
  );
}