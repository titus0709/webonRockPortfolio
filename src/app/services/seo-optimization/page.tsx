"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
// import DownloadChecklist from "@/components/DownloadChecklist";
import { ServiceHero} from "@/components/ServiceComponents";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileText, MapPin, TrendingUp, CheckCircle, Download, BarChart } from "lucide-react";
import seo from "@/assets/seo-1.jpg";

const auditAreas = [
  { icon: Search, title: "Technical SEO", description: "Site speed, mobile-friendliness, crawlability" },
  { icon: FileText, title: "On-Page SEO", description: "Content, keywords, meta tags, structure" },
  { icon: MapPin, title: "Local SEO", description: "Google Business Profile, citations, reviews" },
  { icon: TrendingUp, title: "Content Strategy", description: "Topic clusters, keyword gaps, opportunities" }
];

const quickWins = [
  "Fix broken links and 404 errors",
  "Optimize page titles and meta descriptions",
  "Improve site speed (compress images, minify code)",
  "Set up Google Business Profile",
  "Create XML sitemap and submit to Google",
  "Add schema markup for rich snippets",
  "Optimize for mobile devices",
  "Fix duplicate content issues"
];

const packages = [
  {
    name: "Local SEO",
    price: "4,999/mo",
    description: "Perfect for local businesses",
    features: [
      "Google Business optimization",
      "Local citation building",
      "Review management",
      "5 pages optimized",
      "Monthly reporting",
      "Keyword tracking (20)"
    ]
  },
  {
    name: "Growth SEO",
    price: "7,999/mo",
    description: "For growing businesses",
    features: [
      "Everything in Local",
      "15 pages optimized",
      "Content creation (2/mo)",
      "Link building",
      "Technical SEO fixes",
      "Keyword tracking (50)",
      "Competitor analysis"
    ],
    popular: true
  },
  {
    name: "Enterprise SEO",
    price: "11,999/mo",
    description: "For established brands",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Content creation (4+/mo)",
      "Advanced link building",
      "Conversion optimization",
      "Keyword tracking (100+)",
      "Dedicated SEO manager"
    ]
  }
];

const kpis = [
  { metric: "Organic Traffic", description: "Visitors from search engines" },
  { metric: "Keyword Rankings", description: "Position for target keywords" },
  { metric: "Domain Authority", description: "Overall site strength" },
  { metric: "Conversion Rate", description: "Visitors who become leads" },
  { metric: "Backlinks", description: "Quality sites linking to you" },
  { metric: "Page Speed", description: "Load time performance" }
];

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "Most businesses see initial improvements in 3-4 months, with significant results in 6-12 months. SEO is a long-term investment that compounds over time."
  },
  {
    question: "What's the difference between local and national SEO?",
    answer: "Local SEO targets customers in your geographic area (e.g., 'plumber in Austin'). National SEO targets broader keywords across the country. We recommend local SEO for service businesses."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "No one can guarantee rankings (beware of those who do!). We use proven strategies to improve your visibility, but Google's algorithm is constantly changing."
  },
  {
    question: "What if I already have a website?",
    answer: "Perfect! We'll audit your existing site, identify issues, and create a roadmap to improve your rankings without rebuilding from scratch."
  },
  {
    question: "Do you write content for my website?",
    answer: "Yes! Our Growth and Enterprise packages include monthly content creation optimized for your target keywords and audience."
  },
  {
    question: "How do you measure success?",
    answer: "We track organic traffic, keyword rankings, leads generated, and conversion rates. You'll receive monthly reports showing progress and ROI."
  }
];

export default function SEOOptimizationPage() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const sendChecklist = async (nameArg: string, emailArg: string) => {
    return new Promise<void>((resolve) => setTimeout(resolve, 600));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendChecklist(name, email);
      const link = document.createElement("a");
      link.href = "/assets/checklist.pdf";
      link.download = "checklist.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const anchorLinks = [
    { label: "Overview", href: "#overview" },
    { label: "What We Audit", href: "#audit" },
    { label: "Quick Wins", href: "#quick-wins" },
    { label: "Packages", href: "#packages" },
    { label: "Reporting", href: "#reporting" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  const handleMiniAudit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mini audit requested:", { email, website });
  };

  return (
    <ServiceLayout>
      <section
        className="relative h-[60vh] sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${seo.src})`,
        }}
      >
        <div className="container mx-auto px-4 lg:mt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Get found. Get customers.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
              Technical and local SEO that moves the needle.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="#contactform" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg font-semibold px-8 py-6 rounded-lg">
                  Get Free Audit
                </Button>
              </a>
            </div>

            <p className="text-sm text-gray-300 mt-6">Trusted by local businesses</p>
          </div>
        </div>
      </section>

      {/* What We Audit */}
      <section id="audit" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">What We Audit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {auditAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow hover:shadow-green-500/50">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01A959]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#01A959]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section id="quick-wins" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Typical Fixes & Quick Wins</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">These are common issues we find and fix in the first 30 days</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickWins.map((win, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{win}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Monthly SEO Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-[#01A959] border-2 shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#01A959] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg sm:text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{pkg.description}</CardDescription>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-900 mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-[#01A959] hover:bg-[#018f4d] text-white py-3 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & KPIs */}
      <section id="reporting" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Reporting & KPIs</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">We track what matters: traffic, rankings, and leads</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kpis.map((kpi, index) => (
                <Card key={index} className="hover:bg-green-100 transform hover:scale-101 transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <BarChart className="w-5 h-5 text-[#01A959]" />
                      <CardTitle className="text-base sm:text-lg">{kpi.metric}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600">{kpi.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-4 sm:px-6 border">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#01A959]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        id="contact"
        title="Ready to Boost Your SEO?"
        description="Contact us today for a free consultation and see how we can help your business grow online."
        showBudget={false}
      />
    </ServiceLayout>
  );
}
