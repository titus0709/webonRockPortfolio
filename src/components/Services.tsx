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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} href={service.link}>
                <Card
                  className={
                    "h-full relative overflow-hidden group cursor-pointer transition-all duration-300 " +
                    "hover:shadow-xl hover:-translate-y-1 border-2  bg-white"
                  }
                >
                  {/* sliding gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />

                  {/* giant faded icon in background */}
                  <Icon className="absolute z-10 -top-12 -right-12 text-[5.5rem] text-slate-100 group-hover:text-green-400 group-hover:rotate-12 transition-transform duration-300 pointer-events-none" />

                  <CardHeader className="relative z-20">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#01A959] transition-colors"
                      // background adapts when overlay slides in
                      style={{ backgroundColor: "rgba(1,169,89,0.06)" }}
                    >
                      <Icon className="w-7 h-7 text-[#01A959] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-20">
                    <CardDescription className="text-gray-600 mb-4 group-hover:text-green-100 transition-colors">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center text-[#01A959] font-medium group-hover:text-white group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
