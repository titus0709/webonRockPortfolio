// app/(your-path)/AppDevelopmentPage.tsx
"use client";
import { motion } from "framer-motion";

import ServiceLayout from "@/components/ServiceLayout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Bell, CreditCard, MapPin, Shield, Zap, CheckCircle, Play } from "lucide-react";
import mobileAppDev from "@/assets/mobileAppDev.jpg";
import StartProject from "@/components/StartProject";
import Header from "@/components/Header";
import { Footer } from "react-day-picker";

// Fade-up animation preset
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const process = [
  { step: 1, title: "Discovery & Planning", duration: "1-2 weeks", description: "Understand your business, target audience, and app goals. Define user flows and technical requirements." },
  { step: 2, title: "MVP Development", duration: "6-8 weeks", description: "Build core features and basic UI for user and partner apps. Set up backend and database." },
  { step: 3, title: "Testing & Refinement", duration: "2-3 weeks", description: "Conduct user testing, fix bugs, and improve UX based on feedback." },
  { step: 4, title: "Launch & Support", duration: "1 week", description: "Deploy apps to App Store and Google Play. Provide training and post-launch support." }
];

const problems = [
  { icon: Smartphone, title: "Low Adoption", description: "Users download but don't engage" },
  { icon: Bell, title: "Poor Onboarding", description: "Complex signup flows lose users" },
  { icon: MapPin, title: "No Offline Mode", description: "App breaks without internet" },
  { icon: Shield, title: "Tracking Issues", description: "Can't monitor deliveries or orders" }
];

const features = [
  { icon: Shield, title: "Authentication", description: "Secure login with social auth" },
  { icon: Bell, title: "Push Notifications", description: "Real-time updates and alerts" },
  { icon: CreditCard, title: "Payment Integration", description: "Stripe, PayPal, and more" },
  { icon: MapPin, title: "Real-time Tracking", description: "Live GPS and status updates" },
  { icon: Zap, title: "Admin Dashboard", description: "Manage everything in one place" }
];

const techStack = [
  { name: "Figma", description: "Designing" },
  { name: "Flutter", description: "Cross-platform mobile development" },
  { name: "Flutter", description: "Another Cross-platform mobile development" },
  { name: "Nodejs", description: "Backend" },
  { name: "AWS", description: "Real-time database" },
  { name: "Google Maps API", description: "Location and routing services" },
 
];


const pricingModels = [
  {
    name: "MVP Package",
    price: "from 50,000",
    description: "Launch your idea fast",
    features: ["User & partner apps", "Basic features only", "iOS + Android", "1-2 months support", "App store submission"]
  },
  {
    name: "Feature-Based",
    price: "from 75,000+",
    description: "Full-featured solution",
    features: ["All MVP features", "Advanced functionality", "Admin dashboard", "Payment integration", "2 months support", "Analytics setup"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale with confidence",
    features: ["Unlimited features", "Custom integrations", "White-label options", "Dedicated team", "3-5 months support", "Priority updates"]
  }
];

const faqs = [
  { question: "How long does it take to build a mobile app?", answer: "An MVP typically takes 8-12 weeks. Full-featured apps can take 3-6 months depending on complexity and integrations." },
  { question: "Do you build for both iOS and Android?", answer: "Yes — we use React Native or Flutter to ship cross-platform from a single codebase." },
  { question: "Can you integrate with my existing systems?", answer: "Yes. We can integrate with CRM, payment systems, databases and third-party APIs." },
  { question: "What happens after the app launches?", answer: "We provide post-launch support, monitoring, bug fixes and updates." },
  { question: "Do you handle app store submissions?", answer: "Yes — we handle submission, assets and compliance for both Apple and Google stores." },
  { question: "Can you build a food delivery app like Judah?", answer: "Yes — real-time tracking, partner management and payments are in our wheelhouse." }
];

export default function AppDevelopmentPage() {
  return (
    <>
    <Header/>
      {/* ---------- HERO: full-bleed background, boxed content ---------- */}
      {/* ---------- HERO: full-bleed background, boxed content ---------- */}
 <section
        className="relative md:-mt-[114px] h-[60vh] sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${mobileAppDev.src})`,
        }}
      >
  {/* background layer covers full viewport width */}
 

  {/* boxed content - MATCHES HEADER WIDTH EXACTLY */}
  <div className="relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-32">
      <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Mobile Apps That Power Your Business
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
            From delivery tracking to customer engagement — we build powerful, scalable apps your users will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => document.getElementById("startproject")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg shadow-md transition-all px-5 sm:px-6 py-2.5 rounded-lg"
            >
              Book a Demo
            </button>

            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/20 hover:text-[#01A959] px-5 sm:px-6 py-2.5 rounded-lg text-base sm:text-lg font-medium transition-all"
            >
              See Features
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ---------- CONTENT: boxed sections (consistent container) ---------- */}
      <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Key Problems We Solve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow border-2 border-red-600/50 hover:shadow-rose-600/50 hover:bg-rose-50">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Features We Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="transition-shadow border-2 border-green-600/50 hover:shadow-md hover:shadow-green-600/50 hover:bg-green-50">
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#01A959]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#01A959]" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Technology & Integrations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg bg-gradient-to-r from-gray-50 via-blue-100 to-green-100/50 transition-shadow border-2  hover:shadow-purple-white">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg  ">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        id="process"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-t from-white to-green-100"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Pricing Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingModels.map((model, index) => (
              <Card key={index} className={`relative ${model.popular ? 'border-[#01A959] border-2 shadow-xl' : ''}`}>
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#01A959] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{model.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{model.description}</CardDescription>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-900 mt-4">{model.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact">
                    <button className="w-full mt-6 bg-[#01A959] hover:bg-[#018f4d] text-white py-3 rounded-lg font-medium transition-colors">
                      Book a Demo
                    </button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-4 sm:px-6 border">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#01A959]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* contact / CTA */}
      <StartProject />
      <Footer />
    </>
  );
}
