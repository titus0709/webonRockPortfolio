"use client";

import Image from "next/image";
import { useState } from "react";
import nammaOoru from "@/assets/nammaKadai.png";
import foodDelivery from "@/assets/foodDelivery.jpg";
import mercy from "@/assets/mercy.png";
import reholife from "@/assets/reholife.png";
import vimala from "@/assets/vimala.png";
import vform from "@/assets/vformwebsite.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

interface Project {
  title: string;
  craft: string;
  outcome: string;
  image: any;
  tags: string[];
  link: string;
  lighthouse?: LighthouseScore;
}

const projects: Project[] = [
  {
    title: "Architectural Portfolio Website",
    craft:
      "Convertion specific website for Architect ",
    outcome: "Under Process",
    image: vform,
    tags: ["Website", "Local SEO", "Lead Generation"],
    link: "https://www.studiovform.in/",
  },
   {
    title: "On-Demand Mobile App",
    craft:
      "Mobile application with real-time order tracking, seamless UX, and integrated payment processing — live on the Play Store.",
    outcome: "Production app. Real users, real transactions. Built and shipped.",
    image: foodDelivery,
    tags: ["Mobile App", "Real-time", "Play Store", "App Store"],
    link: "https://play.google.com/store/apps/details?id=com.judah.fooddelivery",
  },
  {
    title: "Institutional Service Website",
    craft:
      "Conversion-engineered website built to drive service enquiries, showcase credibility, and rank on Google for local search terms.",
    outcome:
      "Live and indexed. Real Google Lighthouse scores below — verified by PageSpeed Insights.",
    image: vimala,
    tags: ["Website", "Local SEO", "Lead Generation"],
    link: "https://www.vimalaschool.in/",
    lighthouse: { performance: 73, accessibility: 89, bestPractices: 100, seo: 92 },
  },
  {
    title: "High-Conversion Landing Page",
    craft:
      "Purpose-built enquiry and enrollment page — designed around one goal: getting the visitor to take action. Fast, focused, and findable.",
    outcome: "100/100 SEO score. Ranks on Google. Real Lighthouse data below.",
    image: mercy,
    tags: ["Landing Page", "SEO", "Conversion"],
    link: "https://www.mercyschool.in/",
    lighthouse: { performance: 81, accessibility: 90, bestPractices: 96, seo: 100 },
  },
  {
    title: "Professional Service Website",
    craft:
      "Clean, fast portfolio site for a service professional — built to establish authority, attract enquiries, and convert visitors into clients.",
    outcome: "100/100 SEO and Best Practices. Real Lighthouse data below.",
    image: reholife,
    tags: ["Website", "SEO", "Service Business"],
    link: "https://www.reholife.org/",
    lighthouse: { performance: 72, accessibility: 99, bestPractices: 100, seo: 100 },
  },
 
  {
    title: "Direct Ordering Platform",
    craft:
      "Lightweight ordering website — customers browse and order directly, no third-party commission. WhatsApp-integrated and mobile-optimised.",
    outcome: "Live ordering system. Owned by the business. Zero commission loss.",
    image: nammaOoru,
    tags: ["Website", "Ordering System", "WhatsApp"],
    link: "https://nammaooruteakadai.in/",
  },
];

// ─── Score colour helpers ─────────────────────────────────────────────────────
function scoreColor(n: number): string {
  if (n >= 90) return "#16a34a";
  if (n >= 50) return "#d97706";
  return "#dc2626";
}

function scoreBg(n: number): string {
  if (n >= 90) return "bg-green-50 border-green-200";
  if (n >= 50) return "bg-amber-50 border-amber-200";
  return "bg-red-50 border-red-100";
}

// ─── Circular score dial ──────────────────────────────────────────────────────
function ScoreDial({ score, label }: { score: number; label: string }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  const color = scoreColor(score);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-11 h-11 sm:w-12 sm:h-12">
        <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="24" cy="24" r={r} fill="none" stroke="#e5e7eb" strokeWidth="4" />
          <circle
            cx="24" cy="24" r={r}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={`${fill} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.6s ease" }}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-extrabold text-[10px] sm:text-[11px]"
          style={{ color }}
        >
          {score}
        </span>
      </div>
      <span className="text-[9px] sm:text-[10px] text-gray-400 font-semibold text-center leading-tight max-w-[48px]">
        {label}
      </span>
    </div>
  );
}

// ─── Lighthouse panel ─────────────────────────────────────────────────────────
function LighthousePanel({ scores }: { scores: LighthouseScore }) {
  const topScore = Math.max(scores.seo, scores.bestPractices);

  return (
    <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-3.5 sm:p-4 mb-5 shadow-sm">
      <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 192 192" aria-hidden="true">
            <path fill="#4285F4" d="M96 16C52.3 16 16 52.3 16 96s36.3 80 80 80 80-36.3 80-80S139.7 16 96 16z"/>
            <path fill="#fff" d="M96 48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
          </svg>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            PageSpeed Insights
          </span>
        </div>
        <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
          Desktop · Verified
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3.5">
        <ScoreDial score={scores.performance}   label="Perf."        />
        <ScoreDial score={scores.accessibility} label="A11y"         />
        <ScoreDial score={scores.bestPractices} label="Best Practices"/>
        <ScoreDial score={scores.seo}           label="SEO"          />
      </div>

      <div className={`flex items-start gap-2 rounded-lg px-3 py-2.5 border ${scoreBg(topScore)}`}>
        <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill={scoreColor(topScore)} aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <p className="text-[11px] font-semibold leading-snug" style={{ color: scoreColor(topScore) }}>
          {scores.seo === 100 && scores.bestPractices === 100
            ? "Perfect 100 SEO + 100 Best Practices — built to Google's exact standards."
            : scores.seo === 100
            ? "Perfect 100 SEO score — Google can find and rank this site."
            : scores.bestPractices === 100
            ? "Perfect 100 Best Practices — built to Google's exact standards."
            : `${topScore}/100 — top-tier score verified by Google.`}
        </p>
      </div>

      {scores.performance < 90 && (
        <p className="mt-2.5 text-[10px] text-gray-400 leading-relaxed">
          Performance is {scores.performance}/100 on desktop.{" "}
          <span className="text-gray-500 font-medium">
            We target 90+ on every build — actively improving.
          </span>
        </p>
      )}
    </div>
  );
}

// ─── Icon helpers ─────────────────────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-white transition-all duration-300 border
        ${hovered
          ? "border-[#D4AF37]/50 shadow-[0_24px_64px_rgba(0,0,0,0.11)] -translate-y-1"
          : "border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Tags */}
        <div className="absolute bottom-3.5 left-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white border border-white/20 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live badge */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Live</span>
        </div>

        {/* SEO badge on image (scored projects only) */}
        {project.lighthouse && (
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
            <span className="text-[9px] sm:text-[10px] font-bold text-green-400 uppercase tracking-widest">
              SEO {project.lighthouse.seo}/100
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 sm:p-6">
        {/* Index label */}
        <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5">
          Project {String(index + 1).padStart(2, "0")}
        </p>

        <h3
          className="text-[#0F5132] font-bold leading-tight mb-3 text-lg sm:text-xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.craft}</p>

        {/* Lighthouse panel */}
        {project.lighthouse && <LighthousePanel scores={project.lighthouse} />}

        {/* Outcome pill — non-scored projects */}
        {!project.lighthouse && (
          <div className="flex items-start gap-2.5 bg-[#0F5132]/5 border border-[#0F5132]/12 rounded-xl px-4 py-3 mb-5">
            <svg className="w-4 h-4 text-[#0F5132] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="20 6 9 12 4 10"/>
              <line x1="4" y1="10" x2="4" y2="20"/>
              <line x1="20" y1="6" x2="20" y2="20"/>
              <polyline points="4 20 9 18 20 20"/>
            </svg>
            <p className="text-[#0F5132] text-xs font-semibold leading-relaxed">{project.outcome}</p>
          </div>
        )}

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-[#0F5132] text-[#0F5132] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#0F5132] hover:text-white active:scale-95 transition-all duration-200 group/btn"
        >
          <ExternalIcon />
          <span>View Live Site</span>
          <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">
            <ArrowRight />
          </span>
        </a>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function GulfPortfolio() {
  return (
    <section id="work" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[#D4AF37] font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-3">
            Our Work
          </p>
          <h2
            className="text-[#0F5132] font-extrabold mb-4 leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.9rem)",
              fontFamily: "'Georgia', serif",
            }}
          >
            Built to Rank.{" "}
            <span className="text-[#D4AF37]">Verified by Google.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            We don't ask you to take our word for it. Every site below is live — click the link,
            run it through{" "}
            <a
              href="https://pagespeed.web.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F5132] font-medium underline underline-offset-2 hover:text-[#D4AF37] transition-colors"
            >
              PageSpeed Insights
            </a>{" "}
            yourself, and see exactly what Google thinks of our work.
          </p>
        </div>

        {/* ── Honest context ── */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-14 px-0">
          <div className="flex items-start gap-3 bg-[#0F5132]/5 border border-[#0F5132]/12 rounded-xl px-4 sm:px-5 py-4">
            <svg className="w-4 h-4 text-[#0F5132] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p className="text-[#0F5132]/80 text-xs sm:text-sm leading-relaxed">
              These are our existing clients — not Gulf companies yet. We're making our first
              move into Kuwait, Bahrain, and Oman.{" "}
              <strong className="text-[#0F5132]">
                The Lighthouse scores are real, unedited, and independently verifiable.
              </strong>{" "}
              We believe that's worth more than any marketing claim.
            </p>
          </div>
        </div>

        {/* ── Grid ──
             Mobile:  1 column
             Tablet:  2 columns (≥768px)
             Desktop: 2 columns with last odd card centred
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 mb-12 sm:mb-16">
          {projects.map((project, index) => {
            // If last item and odd total: span full width on tablet+
            const isLastOdd = index === projects.length - 1 && projects.length % 2 !== 0;
            return (
              <div
                key={project.link}
                className={isLastOdd ? "sm:col-span-2 sm:max-w-lg sm:mx-auto w-full" : ""}
              >
                <ProjectCard project={project} index={index} />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center border-t border-gray-100 pt-10 sm:pt-12">
          <p className="text-gray-700 font-semibold text-base sm:text-lg mb-2">
            Want these scores — built for your Gulf business?
          </p>
          <p className="text-gray-400 text-sm mb-6 sm:mb-7 max-w-sm sm:max-w-md mx-auto leading-relaxed px-2">
            A site that scores 100 SEO on Google is a site that gets found.
            That's the baseline we build every project to.
          </p>
          <a
            href={`https://wa.me/919566515735?text=${encodeURIComponent(
              "Hi! I saw your portfolio and Google scores. I want to discuss a website for my business."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#D4AF37] text-[#0a3d22] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:brightness-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="sm:w-5 sm:h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Discuss Your Gulf Project on WhatsApp</span>
            <ArrowRight />
          </a>
          <p className="mt-3 text-gray-400 text-xs">
            Free 15-min call · No commitment · We'll be straight with you
          </p>
        </div>

      </div>
    </section>
  );
}