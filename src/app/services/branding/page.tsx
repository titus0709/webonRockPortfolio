"use client";

import ServiceLayout from "@/components/ServiceLayout";

import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Palette, Instagram, FileText, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandingBg from "@/assets/branding.jpg";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const whyBranding = [
  {
    title: "First Impressions Matter",
    description: "You have 7 seconds to make an impression. Professional branding builds instant trust."
  },
  {
    title: "Stand Out from Competitors",
    description: "Consistent visual identity makes you memorable and recognizable in your market."
  },
  {
    title: "Increase Conversions",
    description: "Professional branding can increase conversion rates by up to 200%."
  }
];

const packages = [
  {
    name: "Logo + Identity",
    price: "",
    description: "Essential brand foundation",
    features: [
      "3 logo concepts",
      "2 revision rounds",
      "Color palette",
      "Typography guide",
      "Logo files (all formats)",
      "Brand guidelines (basic)"
    ]
  },
  {
    name: "Social Starter",
    price: "",
    description: "Brand + social presence",
    features: [
      "Everything in Logo + Identity",
      "Social media templates (10)",
      "Profile graphics",
      "Cover images",
      "Story templates",
      "1 month content calendar"
    ],
    popular: true
  },
  {
    name: "Full Brand Kit",
    price: "",
    description: "Complete brand system",
    features: [
      "Everything in Social Starter",
      "Business card design",
      "Letterhead & email signature",
      "Marketing materials",
      "Brand photography direction",
      "3 months content calendar",
      "Brand strategy session"
    ]
  }
];

const deliverables = [
  { category: "Logo Design", items: ["Primary logo", "Secondary logo", "Icon/mark", "Black & white versions"] },
  { category: "Visual Identity", items: ["Color palette (primary & secondary)", "Typography system", "Pattern/texture library", "Icon style guide"] },
  { category: "Social Assets", items: ["Profile pictures", "Cover images", "Post templates", "Story templates"] },
  { category: "Brand Guidelines", items: ["Logo usage rules", "Color specifications", "Typography guidelines", "Do's and don'ts"] }
];

const contentCalendar = [
  { day: "Monday", type: "Educational", example: "Industry tips, how-to guides" },
  { day: "Wednesday", type: "Engagement", example: "Questions, polls, behind-the-scenes" },
  { day: "Friday", type: "Promotional", example: "Services, offers, testimonials" }
];

const onboardingSteps = [
  { step: "1", title: "Discovery Call", description: "We learn about your business, values, and target audience" },
  { step: "2", title: "Concept Development", description: "We create initial logo concepts and mood boards" },
  { step: "3", title: "Refinement", description: "You provide feedback and we refine your chosen direction" },
  { step: "4", title: "Finalization", description: "We deliver all files and brand guidelines" }
];

const faqs = [
  {
    question: "How long does branding take?",
    answer: "Logo + Identity takes 2-3 weeks. Full Brand Kit takes 4-6 weeks. Timeline depends on feedback speed and revisions."
  },
  {
    question: "What if I don't like the initial concepts?",
    answer: "We include revision rounds in all packages. We'll work with you until you're happy with the result."
  },
  {
    question: "Do you provide the source files?",
    answer: "Yes! You'll receive all logo files in multiple formats (PNG, JPG, SVG, PDF) plus source files for future edits."
  },
  {
    question: "Can you match my existing brand colors?",
    answer: "Absolutely. We can work with your existing colors or help you refine them for better digital performance."
  },
  {
    question: "Do you create content for social media?",
    answer: "We provide templates and a content calendar. You can create posts yourself or hire us for ongoing content creation."
  },
  {
    question: "What about trademark registration?",
    answer: "We design your logo, but trademark registration is separate. We can recommend trademark attorneys if needed."
  }
];

export default function BrandingPage() {
  const anchorLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Packages", href: "#packages" },
    { label: "Deliverables", href: "#deliverables" },
    { label: "Content Calendar", href: "#content" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
    <Header/>
      <section
        className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[68vh] md:h-[75vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${brandingBg.src})`,
        }}
      >
        <div className="container mx-auto px-6 md:pt-32 lg:pt-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
            Build a brand that’s memorable and gets found online
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8">
            Build a strong online brand: logo, website, color system, and Google Business setup. Get a free brand audit to start growing your presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-[#01A959] hover:bg-[#018f4d] text-white text-sm sm:text-base md:text-lg font-medium px-5 py-3 rounded-lg shadow-md transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Why Branding Matters */}
      <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Why Branding Matters for Conversions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
            {whyBranding.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow  hover:border-green-600/30 hover:shadow-green-600/50 hover:bg-green-50">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto bg-[#01A959]/5 border-l-4 border-[#01A959] p-4 sm:p-6 rounded-r-lg">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">The WebOnRock Difference</h3>
            <p className="text-sm sm:text-base text-gray-700">
              We don't just design logos — we create complete brand systems that work across all touchpoints.
              From your website to social media, every element reinforces your brand and builds trust with customers.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Branding Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-[#01A959] border-2 shadow-xl" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#01A959] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg sm:text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{pkg.description}</CardDescription>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mt-3">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#01A959] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 sm:mt-6 bg-[#01A959] hover:bg-[#018f4d] text-white py-2.5 sm:py-3 rounded-lg font-medium transition">
                    Get Started
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Examples */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Brand Work Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition hover:shadow-purple-500/50">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Palette className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-gray-700">Logo Design</CardTitle>
                <CardDescription>Modern, memorable brand marks</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition hover:shadow-green-500/50">
              <div className="aspect-square bg-gradient-to-br from-[#01A959] to-[#0E8C4A] flex items-center justify-center">
                <Instagram className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-gray-700">Social Templates</CardTitle>
                <CardDescription>Consistent, on-brand posts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition hover:shadow-red-600/50">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-gray-700">Brand Guidelines</CardTitle>
                <CardDescription>Complete usage documentation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            What You'll Receive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deliverables.map((section, index) => (
              <Card key={index} className="shadow-md hover:shadow-green-400/50 transition ">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#01A959] flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <motion.section
        id="process"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-t from-white to-green-100"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Branding Process
          </h2>

          <div className="max-w-3xl mx-auto">
            {onboardingSteps.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 last:mb-0 items-start"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#01A959] text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-4 border-b border-gray-200 last:border-0">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <section id="faqs" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-4 sm:px-6 border">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#01A959]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">- Let's Discuss Your Growth! -</h2> */}
          <div className="max-w-5xl mx-auto">
            <ContactForm
              title="Ready to Build Your Brand?"
              description="Tell us about your business and we'll create a brand that stands out."
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
