
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";

import nammaOoru from "@/assets/nammaKadai.png";
import foodDelivery from "@/assets/foodDelivery.jpg";
import mercy from "@/assets/mercy.png";
import reholife from "@/assets/reholife.png";
import vimala from "@/assets/vimala.png";
import vform from "@/assets/vformwebsite.png";
import ayyanar from "@/assets/sriayyanar.png";
import judah from "@/assets/judahwebsite.png";

const projects = [
  {
    title: "Sri Ayyanar Temple Architecture Website",
    description:
      "A fully manageable portfolio website to showcase 60+ projects, featuring a CMS for easy project uploads and updates, up to 100 GB of storage, and no recurring website maintenance fees.",
    image: ayyanar,
    tags: ["Web-application"],
    link: "https://sriayyanararchitects.in/",
    number: "01",
  },
  {
    title: "Food Delivery App",
    description:
      "A food ordering platform with seamless ordering, real-time tracking and integrated payment processing.",
    image: foodDelivery,
    tags: ["Mobile App", "Real-time"],
    link: "https://play.google.com/store/apps/details?id=com.judah.fooddelivery",
    number: "02",
  },
  {
    title: "Judah Food Delivery Website",
    description:
      "A modern food delivery website designed to showcase menu items, facilitate orders, and provide a seamless user experience.",
    image: judah,
    tags: ["Website", "E-commerce"],
    link: "https://www.judahfooddelivery.com/",
    number: "03",
  },
  {
    title: "Vimala School Website",
    description:
      "A modern school website designed to showcase facilities, programs and generate admission enquiries.",
    image: vimala,
    tags: ["Website", "Education"],
    link: "https://www.vimalaschool.in/",
    number: "04",
  },
  {
    title: "Leadership Trainer's Portfolio",
    description:
      "A professional online presence highlighting coaching services, expertise and client testimonials.",
    image: reholife,
    tags: ["Website", "convertion-specific"],
    link: "https://www.reholife.org/",
    number: "05",
  },
  {
    title: "Mercy School Website",
    description:
      "A focused school website presenting academic programs and making admission enquiries easier.",
    image: mercy,
    tags: ["Website", "Education"],
    link: "https://www.mercyschool.in/",
    number: "06",
  },
  // {
  //   title: "Namma Ooru Tea Kadai",
  //   description:
  //     "A simple and convenient food ordering experience for a much-loved local food business.",
  //   image: nammaOoru,
  //   tags: ["Website", "Ordering"],
  //   link: "https://nammaooruteakadai.in/",
  //   number: "07",
  // },
];

const ease = [0.22, 1, 0.36, 1] as const;

// Project Card
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-[#B7F36B]/40 hover:bg-white/[0.055] hover:shadow-[0_20px_60px_rgba(183,243,107,0.07)]"
    >
      {/* Project Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title}`}
        className="block"
      >
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#151A17]">

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090C0B]/80 via-[#090C0B]/10 to-[#090C0B]/10 opacity-80 transition-opacity duration-500 group-hover:opacity-50" />

          {/* Project Number */}
          <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/80 backdrop-blur-md">
            PROJECT {project.number}
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#B7F36B] text-[#090C0B] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight size={19} />
          </div>

          {/* Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-[#090C0B]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#B7F36B] backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#B7F36B] sm:text-xl">
            {project.title}
          </h3>

          <span className="pt-1 text-xs font-medium text-white/25">
            {project.number}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/45">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B7F36B] transition-colors hover:text-white"
          >
            View Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <ExternalLink
            size={15}
            className="text-white/25 transition-colors group-hover:text-[#B7F36B]"
          />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B7F36B] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

// Section Header
function SectionHeader() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="mb-14 text-center sm:mb-16"
    >
      {/* Eyebrow */}
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B7F36B]">
        <span className="h-2 w-2 rounded-full bg-[#B7F36B] animate-pulse" />
        Selected Projects
      </span>

      {/* Heading */}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        Work That{" "}
        <span className="relative inline-block text-[#B7F36B]">
          Speaks.
          <motion.span
            className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#B7F36B]"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          />
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
        A look at what we've built for businesses looking to create better
        digital experiences and grow online.
      </p>

      {/* Project count */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-white/15" />
        <span className="text-[11px] font-medium tracking-[0.2em] text-white/35">
          06 PROJECTS
        </span>
        <span className="h-px w-10 bg-white/15" />
      </div>
    </motion.div>
  );
}

// Main Section
export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#090C0B] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#B7F36B]/[0.045] blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B7F36B]/[0.035] blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader />

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-sm text-white/50 sm:text-base">
            Have something in mind? Let's make it happen.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-md bg-[#B7F36B] px-7 py-4 text-sm font-bold text-[#10150C] shadow-[0_0_35px_rgba(183,243,107,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5E65A] hover:shadow-[0_0_40px_rgba(183,243,107,0.2)]"
          >
            Start a Project

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
