"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import nammaOoru from "@/assets/nammaKadai.png";
import foodDelivery from "@/assets/foodDelivery.jpg";
import mercy from "@/assets/mercy.png";
import reholife from "@/assets/reholife.png";
import vimala from "@/assets/vimala.png";
import vform from "@/assets/vformwebsite.png";

const projects = [
  {
    title: "Architect Portfolio Website",
    description:
      "High-conversion website for an architect to showcase their work and attract new clients.",
    image: vform,
    tags: ["Website", "SEO"],
    link: "https://www.studiovform.in/",
    accent: "#01A959",
  },
  {
    title: "Food Delivery App",
    description:
      "A modern food delivery platform with real-time tracking, seamless ordering, and integrated payment processing.",
    image: foodDelivery,
    tags: ["Mobile App", "Real-time"],
    link: "https://play.google.com/store/apps/details?id=com.judah.fooddelivery",
    accent: "#01A959",
  },
  {
    title: "Vimala School Website",
    description:
      "High-conversion school website to drive admissions and showcase facilities and programs.",
    image: vimala,
    tags: ["Website", "SEO"],
    link: "https://www.vimalaschool.in/",
    accent: "#01A959",
  },
  {
    title: "Leadership Trainer's Website",
    description:
      "Portfolio website for a Leadership and Life Coach to highlight services and client testimonials.",
    image: reholife,
    tags: ["Website", "SEO"],
    link: "https://www.reholife.org/",
    accent: "#01A959",
  },
  {
    title: "Mercy School Website",
    description:
      "Landing page for a Matriculation school to showcase programs and facilitate enrollment.",
    image: mercy,
    tags: ["Website", "SEO"],
    link: "https://www.mercyschool.in/",
    accent: "#01A959",
  },
  {
    title: "Namma Ooru Tea Kadai",
    description: "Simple food ordering website for a beloved local bakery.",
    image: nammaOoru,
    tags: ["Website", "SEO", "Ordering"],
    link: "https://nammaooruteakadai.in/",
    accent: "#01A959",
  },
];

// ─── Card Component ───────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Tags float on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-white/90 text-gray-700 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow icon top-right — appears on hover */}
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#01A959] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#01A959] transition-colors duration-300 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-[#01A959] font-semibold text-sm group/link w-fit"
        >
          <span className="border-b border-transparent group-hover/link:border-[#01A959] transition-all duration-200">
            View Site
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#01A959] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-14"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Eyebrow */}
      <span className="inline-block px-4 py-1.5 rounded-full bg-[#01A959]/10 text-[#01A959] text-xs font-semibold tracking-widest uppercase mb-4">
        Our Work
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Projects We're{" "}
        <span className="relative inline-block">
          Proud Of
          <motion.span
            className="absolute bottom-0 left-0 h-[3px] bg-[#01A959] rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />
        </span>
      </h2>
      <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
        Real businesses, real results — from schools and coaches to food apps and architect portfolios.
      </p>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}