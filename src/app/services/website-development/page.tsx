"use client";

import ServiceLayout from "@/components/ServiceLayout";
// import { ServiceHero } from "@/components/ServiceComponents";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, ShoppingCart, Layers, FileText, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import StartProject from "@/components/StartProject";
import FeaturedWork from "@/components/FeaturedWork";
import web from "@/assets/websitePlan.jpg";
import GalleryCarousel from "@/components/Gallery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




// Fade-up animation preset
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  { icon: Monitor, title: "Responsive Design", description: "Perfect on all devices" },
  { icon: ShoppingCart, title: "E-commerce", description: "Sell online seamlessly" },
  { icon: Layers, title: "Headless CMS", description: "Flexible management" },
  { icon: FileText, title: "CMS Integration", description: "Easy content updates" },
  { icon: Zap, title: "Landing Pages", description: "High-converting pages" }
];

const process = [
  { step: "01", title: "Discovery", description: "We learn your business, goals, and target audience", duration: "1 weeks" },
  { step: "02", title: "Design", description: "Wireframes and mockups for your approval", duration: "2 weeks" },
  { step: "03", title: "Build", description: "Development with regular progress updates", duration: "4 weeks" },
  { step: "04", title: "Launch", description: "Testing, deployment, and training", duration: "1 week" },
  { step: "05", title: "Grow", description: "Ongoing optimization and support", duration: "Ongoing" }
];



export default function ClientWebsiteDevelopmentPage() {
  return (
    <>
    <Header />
      {/* Hero aligned to same max width as header so side gutters match */}
    
       <section
                className="relative md:-mt-[114px] h-[90vh] sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${web.src})`,
                }}
              >
          {/* background layer covers full viewport width */}
         
        
          {/* boxed content - MATCHES HEADER WIDTH EXACTLY */}
          <div className="relative z-10 lg:mt-24">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center text-center text-white">
                <div className="mx-auto max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
             Websites that turn visitors into customers
                  </h1>
        
                  <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                    Fast, secure, SEO-ready sites for local businesses and startups to Boost Growth.
                  </p>
        
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button
                      onClick={() => document.getElementById("startproject")?.scrollIntoView({ behavior: "smooth" })}
                      className="bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg shadow-md transition-all px-5 sm:px-6 py-2.5 rounded-lg"
                    >
                      Let's Get Started
                    </button>
        
                    <button
                      onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                      className="border-2 border-white/20 hover:bg-white hover:text-black px-5 sm:px-6 py-2.5 rounded-lg text-base sm:text-lg font-medium transition-all"
                    >
                      See Works
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* <ServiceHero
            headline="Websites that turn visitors into customers"
            subheadline="Fast, secure, SEO-ready sites for local businesses and startups."
            primaryCTA="Let's Get Started"
            onPrimaryCTA={() => {
              const section = document.getElementById('ourwork');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          /> */}
        
     

      {/* Overview */}
      <motion.section
        id="overview"
        className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Is Your Website Costing You Customers?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Most business websites look fine but fail to convert. We fix that.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {["Slow Loading", "Not Mobile-Friendly", "Poor SEO"].map((title, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="transition-all shadow-md hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">
                      {title === "Slow Loading" && "53% of visitors leave if a site takes over 3 seconds to load."}
                      {title === "Not Mobile-Friendly" && "60% of searches happen on mobile. Is your site ready?"}
                      {title === "Poor SEO" && "If you're not on page 1 of Google, you're invisible to your clients."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#01A959]/10 border-l-4 border-[#01A959] p-4 sm:p-6 rounded-r-lg max-w-3xl mx-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Promise</h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              We build conversion-focused websites that load fast, rank well, and turn visitors into paying customers.
              Every site is mobile-optimized, SEO-ready, and built to grow with your business.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="py-10 sm:py-12 bg-gradient-to-r from-gray-50 to-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">What We Build</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card className="text-center shadow-md hover:shadow-lg transition-all hover:border-[#01A959]">
                    <CardHeader>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01A959]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#01A959]" />
                      </div>
                      <CardTitle className="text-sm sm:text-base md:text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
              );
            })}
          </div>
        </div>
      </motion.section>
      
     
      <FeaturedWork />
      <GalleryCarousel />

      <StartProject />

       {/* Process */}
      <motion.section
        id="process"
        className="py-12 sm:py-20 bg-gradient-to-t from-white to-green-100"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Our Process & Timeline
          </h2>
          <h3 className="text-gray-500 text-sm sm:text-lg mb-8 text-center">May vary with Requirement</h3>
          <div className="max-w-4xl mx-auto">
            {process.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 last:mb-0 items-start"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#01A959] text-white rounded-full flex items-center justify-center text-base sm:text-xl font-bold">
                    {item.step}
                  </div>
                </div>

                <div className="flex-1 pb-4 border-b border-gray-200 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">{item.duration}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    <Footer />
    </>
  );
}
