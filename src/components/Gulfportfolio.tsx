"use client";

import Image from "next/image";

import nammaOoru from "@/assets/nammaKadai.png";
import foodDelivery from "@/assets/foodDelivery.jpg";
import mercy from "@/assets/mercy.png";
import reholife from "@/assets/reholife.png";
import vimala from "@/assets/vimala.png";
import vform from "@/assets/vformwebsite.png";

interface Project {
  title: string;
  category: string;
  image: any;
  link: string;
}

const projects: Project[] = [
  {
    title: "V-Form Architects",
    category: "Conversion Website",
    image: vform,
    link: "https://www.studiovform.in/",
  },
  {
    title: "Food Delivery",
    category: "Mobile Application",
    image: foodDelivery,
    link: "https://play.google.com/store/apps/details?id=com.judah.fooddelivery",
  },
  {
    title: "Vimala School",
    category: "Lead Generation Website",
    image: vimala,
    link: "https://www.vimalaschool.in/",
  },
  {
    title: "Mercy School",
    category: "Conversion Website",
    image: mercy,
    link: "https://www.mercyschool.in/",
  },
  {
    title: "Reholife",
    category: "Service Business Website",
    image: reholife,
    link: "https://www.reholife.org/",
  },
  {
    title: "Namma Ooru Tea Kadai",
    category: "Ordering Platform",
    image: nammaOoru,
    link: "https://nammaooruteakadai.in/",
  },
];

/* ============================================================
   ICONS
============================================================ */

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="5 5 19 5 19 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ============================================================
   FLOATING PROJECT CARD
============================================================ */

function FloatingProject({
  project,
  className,
}: {
  project: Project;
  className: string;
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      className={`group absolute ${className}`}
    >
      <div className="relative overflow-hidden rounded-[14px] border border-[#0B1F3A]/10 bg-white shadow-[0_20px_55px_rgba(11,31,58,0.14)] transition-all duration-500 group-hover:z-30 group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-[0_28px_70px_rgba(11,31,58,0.22)]">

        {/* FULL WEBSITE SCREENSHOT */}
        <div className="relative overflow-hidden bg-[#F7F7F5]">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={1600}
            className="block h-auto w-full object-contain"
            sizes="280px"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0B1F3A]/0 transition-all duration-300 group-hover:bg-[#0B1F3A]/5" />

          {/* Open icon */}
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3A] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight />
          </div>
        </div>

        {/* Project label */}
        <div className="flex items-center justify-between gap-3 bg-white px-3 py-2.5">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold text-[#0B1F3A]">
              {project.title}
            </p>

            <p className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
              {project.category}
            </p>
          </div>

          <span className="text-[#0B1F3A]/30 transition-colors group-hover:text-[#F97316]">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   MAIN PORTFOLIO
============================================================ */

export default function GulfPortfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle orange glow */}
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F97316]/[0.035] blur-3xl" />

        {/* top line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-[#0B1F3A]/[0.07]" />

        {/* bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0B1F3A]/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ======================================================
            HEADER
            FIRST REFERENCE UI:
            LEFT HEADING + RIGHT STATS
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_300px]">
          {/* LEFT */}
          <div className="max-w-[650px]">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F97316]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F97316] sm:text-xs">
                Selected Work
              </p>
            </div>

            {/* Main heading */}
            <h2
              className="text-[clamp(2.7rem,6vw,5rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#0B1F3A]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Websites That
              <br />
              Turn Visitors
              <br />
              Into{" "}
              <span className="text-[#F97316]">
                Leads.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[570px] text-sm leading-6 text-[#0B1F3A]/60 sm:text-base sm:leading-7">
              We build conversion-focused websites and lead generation systems
              for HVAC businesses — designed to attract potential customers,
              build trust, and turn website visitors into enquiries.
            </p>
          </div>

          {/* ====================================================
              STATS
          ==================================================== */}

          <div className="self-start overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-[#FAF9F6]">
            {/* Stat 1 */}
            <div className="border-b border-[#0B1F3A]/10 px-5 py-5">
              <p
                className="text-3xl font-bold text-[#F97316]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                20+
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/45">
                Projects Delivered
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-[#0B1F3A]/10 px-5 py-5">
              <p
                className="text-3xl font-bold text-[#F97316]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                1
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/45">
                App on Play Store
              </p>
            </div>

            {/* Stat 3 */}
            <div className="px-5 py-5">
              <p
                className="text-3xl font-bold text-[#F97316]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                5+
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/45">
                Industries Served
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================
            SMALL VALUE STRIP
        ====================================================== */}

<div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#0B1F3A]/10 py-4">
  <div className="flex items-center gap-2">
    <span className="flex h-5 w-5 items-center justify-center text-sm">
      🎯
    </span>

    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
      Conversion Focused
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="flex h-5 w-5 items-center justify-center text-sm">
      📈
    </span>

    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
      Lead Generation
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="flex h-5 w-5 items-center justify-center text-sm">
      📱
    </span>

    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
      Mobile First
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="flex h-5 w-5 items-center justify-center text-sm">
      🚀
    </span>

    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
      Built for Growth
    </span>
  </div>
</div>

        {/* ======================================================
            DESKTOP FLOATING SHOWCASE

            This is the main UI inspired by your FIRST reference.
        ====================================================== */}

       <div className="relative mt-14 hidden h-[850px] md:block lg:mt-20">

  {/* ====================================================
      LEFT — LARGE SHOWCASE CARDS
  ==================================================== */}

  <FloatingProject
    project={projects[0]}
    className="left-[2%] top-[1%] w-[340px] rotate-[-6deg]"
  />

  <FloatingProject
    project={projects[1]}
    className="left-[-3%] top-[35%] w-[315px] rotate-[5deg]"
  />

  <FloatingProject
    project={projects[2]}
    className="bottom-[0%] left-[8%] w-[325px] rotate-[-4deg]"
  />

  {/* ====================================================
      RIGHT — LARGE SHOWCASE CARDS
  ==================================================== */}

  <FloatingProject
    project={projects[3]}
    className="right-[2%] top-[1%] w-[340px] rotate-[6deg]"
  />

  <FloatingProject
    project={projects[4]}
    className="right-[-3%] top-[35%] w-[315px] rotate-[-5deg]"
  />

  <FloatingProject
    project={projects[5]}
    className="bottom-[0%] right-[8%] w-[325px] rotate-[4deg]"
  />

  {/* ====================================================
      CENTER MESSAGE
  ==================================================== */}

  <div className="absolute left-1/2 top-1/2 z-20 flex w-[430px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">

    {/* Orange accent */}
    <div className="mb-6 h-[2px] w-12 bg-[#F97316]" />

    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[#0B1F3A]/35">
      Built For HVAC Growth
    </p>

    <h3
      className="text-[2.3rem] font-bold leading-[1.02] tracking-[-0.045em] text-[#0B1F3A] lg:text-[2.8rem]"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Let&apos;s Build a System
      <br />
      That Brings You
      <br />
      <span className="text-[#F97316]">
        More HVAC Leads.
      </span>
    </h3>

    <p className="mt-5 max-w-[340px] text-[11px] leading-5 text-[#0B1F3A]/45">
      A conversion-focused website and lead generation system built around
      your HVAC business.
    </p>

    <a
      href={`https://wa.me/919566515735?text=${encodeURIComponent(
        "Hi! I run an HVAC business in the USA and I'd like to discuss your lead generation system."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F97316] px-7 py-3 text-[10px] font-bold text-white shadow-[0_10px_30px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9670d] hover:shadow-[0_15px_35px_rgba(249,115,22,0.3)]"
    >
      Get More HVAC Leads
      <ArrowUpRight />
    </a>
  </div>
</div>

        {/* ======================================================
            MOBILE SHOWCASE

            Keeps the same UI idea but avoids overcrowding.
        ====================================================== */}

        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-[#0B1F3A]/10 bg-[#FAF9F6] shadow-[0_8px_25px_rgba(11,31,58,0.07)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />

                <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0B1F3A] opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                  <ArrowUpRight />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-bold text-[#0B1F3A]">
                    {project.title}
                  </p>

                  <p className="mt-0.5 truncate text-[7px] font-semibold uppercase tracking-[0.1em] text-[#F97316]">
                    {project.category}
                  </p>
                </div>

                <ArrowUpRight />
              </div>
            </a>
          ))}
        </div>

        {/* ======================================================
            MOBILE CENTER CTA
        ====================================================== */}

        <div className="mt-14 text-center md:hidden">
          <div className="mx-auto mb-6 h-[2px] w-9 bg-[#F97316]" />

          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B1F3A]/35">
            Built For HVAC Growth
          </p>

          <h3
            className="text-[2rem] font-bold leading-[1.05] tracking-[-0.035em] text-[#0B1F3A]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let&apos;s Build a System
            <br />
            That Brings You
            <br />
            <span className="text-[#F97316]">More Leads.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-[320px] text-xs leading-5 text-[#0B1F3A]/45">
            Conversion-focused websites and lead generation systems for HVAC
            businesses.
          </p>

          <a
            href={`https://wa.me/919566515735?text=${encodeURIComponent(
              "Hi! I run an HVAC business in the USA and I'd like to discuss your lead generation system."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F97316] px-5 py-3 text-xs font-bold text-white"
          >
            Get More HVAC Leads
            <ArrowUpRight />
          </a>
        </div>

        {/* ======================================================
            BOTTOM LABEL
        ====================================================== */}

        <div className="mt-14 flex items-center justify-between border-t border-[#0B1F3A]/10 pt-5">
          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0B1F3A]/30 sm:text-[9px]">
            Websites · Lead Generation · Conversion
          </p>

          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0B1F3A]/30 sm:text-[9px]">
            USA HVAC
          </p>
        </div>
      </div>
    </section>
  );
}