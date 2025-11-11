import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Search,
  Settings,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies for optimal performance and user experience.",
    link: "/services/website-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that engage users and drive business growth.",
    link: "/services/app-development",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies to improve your search rankings and increase organic traffic.",
    link: "/services/seo-optimization",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and optimization to keep your digital assets running smoothly.",
    link: "/services/maintenance",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Compelling brand identities and visual designs that resonate with your target audience.",
    link: "/services/branding",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                aria-label={`Learn more about ${service.title}`}
                className="block rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
              >
                <Card
                  className={
                    "h-full relative overflow-hidden transition-transform duration-300 " +
                    "group focus-within:shadow-xl hover:shadow-xl active:translate-y-0.5 " +
                    "bg-white border-0"
                  }
                >
                  {/* sliding gradient overlay (slides up on hover/focus) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 translate-y-[100%] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 pointer-events-none" />

                  {/* giant faded icon - responsive sizing */}
                  <Icon
                    aria-hidden
                    className="absolute z-10 -top-10 -right-10 text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] text-slate-100 group-hover:text-green-400 group-focus-within:text-green-400 group-hover:rotate-12 group-focus-within:rotate-12 transition-transform duration-300 pointer-events-none"
                  />

                  <CardHeader className="relative z-20 p-6 sm:p-8">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 transition-colors"
                      // soft background for icon; becomes solid on hover/focus
                      style={{ backgroundColor: "rgba(1,169,89,0.06)" }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#01A959] group-hover:text-white group-focus-within:text-white transition-colors" />
                    </div>

                    <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-white group-focus-within:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-20 p-6 sm:p-8">
                    <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 group-hover:text-green-100 group-focus-within:text-green-100 transition-colors">
                      {service.description}
                    </CardDescription>

                    <div className="flex items-center text-[#01A959] font-medium group-hover:text-white group-focus-within:text-white group-hover:gap-2 transition-all">
                      <span className="text-sm sm:text-base">Learn More</span>
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-focus-within:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
