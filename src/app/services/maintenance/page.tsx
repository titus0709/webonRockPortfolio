"use client";
import { motion } from "framer-motion";
import ServiceLayout from "@/components/ServiceLayout";
import { ServiceHero } from "@/components/ServiceComponents";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, RefreshCw, AlertTriangle, CheckCircle, Clock } from "lucide-react";

import maintenanceBg from "@/assets/404.png";
import { Button } from "@/components/ui/button";

// Fade-up animation preset
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const problems = [
  { icon: AlertTriangle, title: "Unexpected Downtime", description: "Site crashes cost you customers and revenue" },
  { icon: RefreshCw, title: "Outdated Plugins", description: "Security vulnerabilities and compatibility issues" },
  { icon: Zap, title: "Slow Page Speed", description: "Poor performance hurts SEO and conversions" }
];

const included = [
  { icon: Shield, title: "Security Monitoring", description: "24/7 malware scanning and firewall protection" },
  { icon: RefreshCw, title: "Regular Updates", description: "WordPress, plugins, and themes kept current" },
  { icon: Zap, title: "Performance Optimization", description: "Speed monitoring and optimization" },
  { icon: Clock, title: "Daily Backups", description: "Automated backups with easy restore" }
];

const plans = [
  {
    name: "Bronze",
    price: "From 1,500/month",
    description: "Essential maintenance",
    features: [
      "Weekly backups",
      "Monthly updates",
      "Security monitoring",
      "Uptime monitoring",
      "2 hours support/month",
      "48-hour response time"
    ]
  },
  {
    name: "Silver",
    price: "Custom Pricing",
    description: "Complete peace of mind",
    features: [
      "Daily backups",
      "Weekly updates",
      "Advanced security",
      "Performance optimization",
      "5 hours support/month",
      "24-hour response time",
      "Monthly reports"
    ],
    popular: true
  },
  {
    name: "Gold",
    price: "Custom Pricing",
    description: "Priority support",
    features: [
      "Real-time backups",
      "Immediate updates",
      "Premium security suite",
      "Advanced optimization",
      "10 hours support/month",
      "4-hour response time",
      "Priority phone support",
      
    ]
  }
];

const onboardingSteps = [
  { step: "1", title: "Site Audit", description: "We review your current setup and identify issues" },
  { step: "2", title: "Backup & Secure", description: "Create initial backup and implement security measures" },
  { step: "3", title: "Optimize", description: "Speed optimization and performance tuning" },
  { step: "4", title: "Monitor", description: "Set up monitoring and reporting systems" }
];

const faqs = [
  {
    question: "What's included in 'support hours'?",
    answer: "Support hours cover small changes like text updates, image swaps, form modifications, and bug fixes. Larger projects are quoted separately."
  },
  {
    question: "What if my site gets hacked?",
    answer: "We'll restore your site from backup, remove malware, patch vulnerabilities, and implement additional security measures — all included in your plan."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all plans are month-to-month with no long-term contracts. We believe in earning your business every month."
  },
  {
    question: "Do you work with all platforms?",
    answer: "We specialize in WordPress, but also support custom PHP sites, React/Next.js apps, and most modern web platforms."
  },
  {
    question: "What's your response time?",
    answer: "Response times vary by plan: Bronze (48 hours), Silver (24 hours), Gold (4 hours). Emergency issues are prioritized across all plans."
  },
  {
    question: "Do you provide hosting?",
    answer: "We can manage your existing hosting or recommend and set up reliable hosting optimized for your platform."
  }
];

export default function MaintenancePage() {
  const anchorLinks = [
    { label: "Overview", href: "#overview" },
    { label: "What's Included", href: "#included" },
    { label: "Plans", href: "#plans" },
    { label: "Onboarding", href: "#onboarding" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <ServiceLayout>
      {/* Hero */}
      <section
        className="relative h-[60vh] sm:h-[68vh] md:h-[76vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${maintenanceBg.src})`,
        }}
      >
        <div className="container mx-auto px-6 lg:mt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight shadow-black/50 max-w-4xl mx-auto">
            Reliable Website Maintenance Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8">
            Proactive maintenance plans to keep your site secure, fast, and always up-to-date.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg font-medium px-5 py-3 rounded-lg shadow-md transition"
            >
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Don't Let These Issues Cost You Business
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Without regular maintenance, your website becomes vulnerable to security threats, performance issues, and costly downtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="text-center border-2 hover:shadow-md hover:border-red-600/30 hover:shadow-rose-600/50 hover:bg-rose-50">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
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

          <div className="mt-10 bg-[#01A959]/5 border-l-4 border-[#01A959] p-4 sm:p-6 rounded-r-lg max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Our Solution</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Proactive maintenance that prevents problems before they happen. We monitor, update, optimize, and secure your site so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {included.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow hover:border-green-600/30 hover:shadow-green-600/50 hover:bg-green-50">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01A959]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#01A959]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Plus Small Changes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Text and content updates",
                "Image replacements",
                "Form modifications",
                "Menu changes",
                "Plugin configuration",
                "Bug fixes",
                "CSS tweaks",
                "Email setup"
              ].map((change, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border hover:shadow-xl">
                  <CheckCircle className="w-5 h-5 text-[#01A959] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-[#01A959] border-2 shadow-md' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#01A959] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg sm:text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-900 mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="w-full mt-4 sm:mt-6 bg-[#01A959] hover:bg-[#018f4d] text-white py-3 rounded-lg font-medium transition-colors">
                    Get Started
                  </button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <div>
        <motion.section
          id="onboarding"
          className="py-12 sm:py-16 lg:py-20 bg-gray-50"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Simple Onboarding Process
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
      </div>

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
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm
              title="Protect Your Website Today"
              description="Sign up for a maintenance plan or contact us for a custom quote."
              showBudget={false}
            />
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
