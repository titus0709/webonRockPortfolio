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



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <VideoTestimonial />
      <FeaturedWork />
      <WhyWebOnRock />
      <HappyClients/>
      <WorkProcess />
      <ContactForm />
      {/* <Testimonials /> */}
      {/* <LeadMagnet /> */}
      <Footer />
    </div>
  );
}