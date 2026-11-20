
import {
  ArrowUpRight,
  Smartphone,
  GraduationCap,
  Users,
  TrendingUp,
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

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden bg-[#090C0B] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND EFFECTS - DESKTOP ONLY */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:55px_55px]" />

        {/* Green Glows */}
        <div className="absolute -right-[120px] top-20 h-[350px] w-[350px] rounded-full bg-[#B7F36B]/[0.07] blur-[100px]" />

        <div className="absolute -left-[120px] bottom-0 h-[350px] w-[350px] rounded-full bg-[#B7F36B]/[0.05] blur-[100px]" />
      </div>

      {/* LIGHTWEIGHT MOBILE GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] sm:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#B7F36B]" />

            <span className="text-xs font-medium tracking-wide text-[#B7F36B] sm:text-sm">
              RESULTS THAT MATTER
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Real Work.
            <br className="hidden sm:block" />{" "}
            <span className="text-[#B7F36B]">
              Real Results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            We focus on outcomes, not just deliverables. Here's how we've
            helped businesses attract customers, generate leads, and grow.
          </p>
        </div>

        {/* CASE STUDY CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <article
                key={study.number}
                className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-[border-color,background-color,box-shadow] duration-300 sm:p-7 sm:hover:-translate-y-1 sm:hover:border-[#B7F36B]/40 sm:hover:bg-white/[0.055] sm:hover:shadow-[0_15px_40px_rgba(183,243,107,0.06)]"
              >

                {/* CARD HEADER */}
                <div className="relative flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B7F36B]/20 bg-[#B7F36B]/[0.08]">
                      <Icon className="h-5 w-5 text-[#B7F36B]" />
                    </div>

                    <span className="text-xs font-medium text-white/45">
                      {study.category}
                    </span>

                  </div>

                  <span className="text-xs tracking-widest text-white/25">
                    {study.number}
                  </span>

                </div>

                {/* CLIENT NAME */}
                <h3 className="relative mt-7 text-xl font-semibold tracking-tight">
                  {study.name}
                </h3>

                {/* RESULT */}
                <div className="relative mb-5 mt-7">

                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tight text-[#B7F36B] sm:text-6xl">
                      {study.result}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-white/65">
                    {study.metric}
                  </p>

                </div>

                {/* RESULT HIGHLIGHT */}
                <div className="relative mb-5 inline-flex self-start items-center gap-2 rounded-full border border-[#B7F36B]/15 bg-[#B7F36B]/[0.07] px-3 py-1.5">

                  <TrendingUp className="h-3.5 w-3.5 text-[#B7F36B]" />

                  <span className="text-xs font-medium text-[#B7F36B]">
                    {study.highlight}
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className="relative flex-1 text-sm leading-relaxed text-white/55">
                  {study.description}
                </p>

                {/* TAGS */}
                <div className="relative mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">

                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.045] px-3 py-1.5 text-[11px] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* DESKTOP BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 hidden h-[2px] w-0 bg-[#B7F36B] transition-all duration-300 sm:block sm:group-hover:w-full" />

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center sm:mt-14">

          <p className="text-sm text-white/55 sm:text-base">
            Your business could be our next success story.
          </p>

          <a
            href="https://wa.me/919566515735"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#B7F36B] px-6 py-3 text-sm font-semibold text-[#090C0B] transition-all duration-300 sm:hover:-translate-y-1 sm:hover:bg-[#c9ff82] sm:hover:shadow-[0_0_25px_rgba(183,243,107,0.15)]"
          >
            Let's Grow Together

            <ArrowUpRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </section>
  );
}
