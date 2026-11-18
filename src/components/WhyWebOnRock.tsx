
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Smartphone,
  GraduationCap,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

const caseStudies = [
  {
    number: "01",
    name: "Judah Food Delivery",
    category: "Mobile App Growth",
    icon: Smartphone,
    result: "4,000+",
    metric: "App Users",
    description:
      "Helped grow their mobile app user base from 800 to over 4,000 through targeted Meta Ads and a conversion-focused website.",
    tags: ["Meta Ads", "Conversion Website"],
    highlight: "5x user base growth",
  },
  {
    number: "02",
    name: "Karur Study Centre",
    category: "Education Lead Generation",
    icon: GraduationCap,
    result: "1,200+",
    metric: "Leads Generated",
    description:
      "Built a consistent Meta Ads strategy generating 300+ quality leads every month, helping the centre attract more prospective students.",
    tags: ["Meta Ads", "Lead Generation"],
    highlight: "300+ leads monthly",
  },
  {
    number: "03",
    name: "Avenzo Recruiting Team",
    category: "Recruitment Lead Generation",
    icon: Users,
    result: "100+",
    metric: "Leads in 3 Days",
    description:
      "Helped accelerate the recruitment process by generating targeted, relevant candidate leads within just three days.",
    tags: ["Meta Ads", "Targeted Leads"],
    highlight: "Results within 3 days",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#090C0B] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:55px_55px]" />
        <div className="absolute top-20 right-[-120px] w-[350px] h-[350px] rounded-full bg-[#B7F36B]/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-[-120px] w-[350px] h-[350px] rounded-full bg-[#B7F36B]/[0.05] blur-[130px]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#B7F36B] shadow-[0_0_10px_#B7F36B]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#B7F36B]">
              RESULTS THAT MATTER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Real Work.
            <br className="hidden sm:block" />{" "}
            <span className="text-[#B7F36B]">Real Results.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl mx-auto">
            We focus on outcomes, not just deliverables. Here's how we've
            helped businesses attract customers, generate leads, and grow.
          </p>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <motion.div
                key={study.number}
                variants={cardAnimation}
                whileHover={{ y: -7 }}
                className="h-full"
              >
                <div className="group relative flex flex-col h-full min-h-[390px] overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#B7F36B]/40 hover:bg-white/[0.055] hover:shadow-[0_15px_50px_rgba(183,243,107,0.07)]">
                  {/* Hover glow */}
                  <div className="absolute -top-24 -right-20 w-56 h-56 rounded-full bg-[#B7F36B]/[0.08] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card header */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-[#B7F36B]/20 bg-[#B7F36B]/[0.08] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#B7F36B]" />
                      </div>
                      <span className="text-xs text-white/40 font-medium">
                        {study.category}
                      </span>
                    </div>

                    <span className="text-xs tracking-widest text-white/25">
                      {study.number}
                    </span>
                  </div>

                  {/* Client name */}
                  <h3 className="relative mt-7 text-xl font-semibold tracking-tight">
                    {study.name}
                  </h3>

                  {/* Result */}
                  <div className="relative mt-7 mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-bold tracking-tight text-[#B7F36B]">
                        {study.result}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-white/65">
                      {study.metric}
                    </p>
                  </div>

                  {/* Highlight */}
                  <div className="relative inline-flex self-start items-center gap-2 rounded-full border border-[#B7F36B]/15 bg-[#B7F36B]/[0.07] px-3 py-1.5 mb-5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#B7F36B]" />
                    <span className="text-xs font-medium text-[#B7F36B]">
                      {study.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative text-sm leading-relaxed text-white/50 flex-1">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="relative flex flex-wrap gap-2 mt-7 pt-5 border-t border-white/[0.08]">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-white/45 bg-white/[0.045] border border-white/[0.07] rounded-full px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-sm sm:text-base text-white/55">
            Your business could be our next success story.
          </p>
          <a
            href="https://wa.me/919566515735"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 rounded-full bg-[#B7F36B] px-6 py-3 text-sm font-semibold text-[#090C0B] transition-all duration-300 hover:bg-[#c9ff82] hover:shadow-[0_0_30px_rgba(183,243,107,0.2)] hover:-translate-y-1"
          >
            Let's Grow Together
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
