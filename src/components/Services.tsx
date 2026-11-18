
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Megaphone,
  ShoppingBag,
  Search,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import CursorGrid from "@/components/CursorGrid";

const services = [
  {
    icon: Code,
    number: "01",
    title: "Website Development",
    description:
      "Fast, modern websites designed to turn visitors into customers.",
    tags: ["Business Websites", "Landing Pages"],
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Lead Generation",
    description:
      "Targeted ad campaigns that bring the right people to your business.",
    tags: ["Meta Ads", "Google Ads"],
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Shopify & E-commerce",
    description:
      "Online stores built to showcase products and drive more sales.",
    tags: ["Shopify", "Online Stores"],
  },
  {
    icon: Search,
    number: "04",
    title: "SEO Optimization",
    description:
      "Improve your visibility and help customers find you on Google.",
    tags: ["On-page SEO", "Local SEO"],
  },
  {
    icon: Workflow,
    number: "05",
    title: "AI Automation",
    description:
      "Automate follow-ups, manage leads, and save valuable time.",
    tags: ["CRM Systems", "AI Automation"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#090C0B] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* DESKTOP: INTERACTIVE CURSOR GRID */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
        <CursorGrid
          cellSize={60}
          color="#ffffff"
          highlight="area"
          gridStyle="lines"
          radius={140}
          holdTime={400}
          fadeDuration={800}
          fillOpacity={0.06}
          gridOpacity={0.08}
          spotlight={0.6}
          clickPulse
        />
      </div>

      {/* MOBILE: CSS WHITE GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 sm:hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      />

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 left-[-120px] w-[350px] h-[350px] rounded-full bg-[#B7F36B]/[0.07] blur-[130px]" />

        <div className="absolute bottom-0 right-[-100px] w-[350px] h-[350px] rounded-full bg-[#B7F36B]/[0.05] blur-[130px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#B7F36B] shadow-[0_0_10px_#B7F36B]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#B7F36B]">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Everything You Need
            <br className="hidden sm:block" />{" "}
            <span className="text-[#B7F36B]">To Grow Online.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl mx-auto">
            From building your online presence to generating leads and
            automating your business, we help you grow smarter.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={item}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <Link
                  href="#"
                  aria-label={`Learn more about ${service.title}`}
                  className="group relative flex flex-col h-full min-h-[250px] sm:min-h-[270px] overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#B7F36B]/40 hover:bg-white/[0.065] hover:shadow-[0_15px_50px_rgba(183,243,107,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F36B]"
                >
                  {/* HOVER GLOW */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#B7F36B]/[0.08] blur-[65px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* TOP ROW */}
                  <div className="relative flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl border border-[#B7F36B]/20 bg-[#B7F36B]/[0.08] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B7F36B] group-hover:scale-105">
                      <Icon className="w-5 h-5 text-[#B7F36B] transition-colors duration-300 group-hover:text-[#090C0B]" />
                    </div>

                    <span className="text-xs font-medium tracking-widest text-white/25 group-hover:text-[#B7F36B]/70 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-[#B7F36B] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* BOTTOM ROW */}
                  <div className="relative flex items-center justify-between mt-7 pt-5 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs text-white/40 bg-white/[0.045] border border-white/[0.07] rounded-full px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#B7F36B] group-hover:border-[#B7F36B] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#090C0B] group-hover:rotate-45 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-sm text-white/45 mb-4">
            Have a project in mind?
          </p>

          <Link
            href="https://wa.me/919566515735"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#B7F36B] px-6 py-3 text-sm font-semibold text-[#090C0B] transition-all duration-300 hover:bg-[#c9ff82] hover:shadow-[0_0_30px_rgba(183,243,107,0.2)] hover:-translate-y-1"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
