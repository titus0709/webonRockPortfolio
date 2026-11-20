
"use client";

import { useRef, useState, type FormEvent } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Lock,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "" | "sending" | "success" | "error";

export default function StartProject() {
  const [status, setStatus] = useState<Status>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = formRef.current;
    if (!formEl) return;

    setStatus("sending");

    const formData = new FormData(formEl);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const goal = String(formData.get("goal") ?? "") || "Not specified";

    const message = `Hi WebOnRock! I'm interested in your free trial offer.

Name: ${name}
Business: ${business}
WhatsApp / Phone: ${phone}
My Goal: ${goal}

I'd like to know if my business qualifies for the trial.`;

    const whatsappURL = `https://wa.me/919566515735?text=${encodeURIComponent(
      message
    )}`;

    try {
      const newWindow = window.open(whatsappURL, "_blank");

      if (newWindow) {
        newWindow.opener = null;
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("WhatsApp open error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="start-project"
      className="relative isolate overflow-hidden bg-[#090C0B] px-5 py-20 text-white sm:px-6 sm:py-24 lg:py-28"
    >
      {/* BACKGROUND EFFECTS - DESKTOP ONLY */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Green Glow */}
        <div className="absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#B7F36B]/[0.08] blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#B7F36B]/[0.04] blur-[90px]" />

      </div>

      {/* LIGHTWEIGHT MOBILE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] sm:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* OFFER AND CONTENT */}
          <div>

            {/* OFFER BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/30 bg-[#B7F36B]/[0.09] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#B7F36B]" />

              <span className="text-xs font-semibold text-[#B7F36B] sm:text-sm">
                SPECIAL OFFER FOR BUSINESSES
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[58px]">
              More Leads.
              <br />
              More Customers.
              <br />
              <span className="text-[#B7F36B]">
                Less Risk.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              Want more customers but unsure whether ads will work for your
              business? Let's test a strategy before you commit to a
              long-term partnership.
            </p>

            {/* TRIAL OFFER CARD */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#B7F36B]/25 bg-[#B7F36B]/[0.055] p-5 sm:p-6">

              <div className="relative">

                {/* CARD HEADER */}
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B7F36B]">
                    <Gift className="h-5 w-5 text-[#090C0B]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#B7F36B]">
                      Our Trial Offer
                    </p>

                    <h3 className="text-xl font-bold sm:text-2xl">
                      Try Before You Commit.
                    </h3>
                  </div>

                </div>

                {/* OFFER BENEFITS */}
                <div className="space-y-4">
                  {[
                    "Free trial campaign management for eligible businesses",
                    "No management fee during the agreed trial",
                    "No agreed results, no management fee",
                    "A strategy focused on qualified leads, not just clicks",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B7F36B]" />

                      <p className="text-sm leading-relaxed text-white/75">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* DISCLAIMER */}
                <div className="mt-5 border-t border-white/[0.09] pt-4">
                  <p className="text-xs leading-relaxed text-white/45">
                    Advertising spend is paid separately by the business.
                    Trial eligibility, duration and lead targets are agreed
                    before the campaign starts.
                  </p>
                </div>

              </div>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs text-white/45">
                <Target className="h-4 w-4 text-[#B7F36B]" />
                Results-focused strategy
              </div>

              <div className="flex items-center gap-2 text-xs text-white/45">
                <TrendingUp className="h-4 w-4 text-[#B7F36B]" />
                Built for business growth
              </div>

            </div>

          </div>

          {/* LEAD FORM */}
          <div>

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#111713] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:bg-white/[0.045] sm:p-8 sm:backdrop-blur-xl lg:p-9">

              <div className="relative">

                {/* FORM HEADING */}
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B7F36B]">
                  <MessageCircle className="h-4 w-4" />
                  Get Started
                </div>

                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Get Your Free Trial.
                </h3>

                <p className="mb-8 mt-2 text-sm text-white/50">
                  Tell us a little about your business. Let's see how we
                  can help you get more customers.
                </p>

                {/* FORM */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="project-name"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Your Name *
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

                      <Input
                        id="project-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Enter your name"
                        className="h-12 rounded-xl border-white/[0.1] bg-white/[0.045] pl-11 text-white placeholder:text-white/30 focus-visible:border-[#B7F36B]/50 focus-visible:ring-[#B7F36B]"
                      />
                    </div>
                  </div>

                  {/* BUSINESS */}
                  <div>
                    <label
                      htmlFor="project-business"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Business Name *
                    </label>

                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

                      <Input
                        id="project-business"
                        name="business"
                        required
                        placeholder="Your business name"
                        className="h-12 rounded-xl border-white/[0.1] bg-white/[0.045] pl-11 text-white placeholder:text-white/30 focus-visible:border-[#B7F36B]/50 focus-visible:ring-[#B7F36B]"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="project-phone"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      WhatsApp Number *
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

                      <Input
                        id="project-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="h-12 rounded-xl border-white/[0.1] bg-white/[0.045] pl-11 text-white placeholder:text-white/30 focus-visible:border-[#B7F36B]/50 focus-visible:ring-[#B7F36B]"
                      />
                    </div>
                  </div>

                  {/* GOAL */}
                  <div>
                    <label
                      htmlFor="project-goal"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      What do you need help with?
                    </label>

                    <select
                      id="project-goal"
                      name="goal"
                      defaultValue=""
                      className="h-12 w-full rounded-xl border border-white/[0.1] bg-[#151A17] px-4 text-sm text-white/70 outline-none focus:border-[#B7F36B]/50 focus:ring-1 focus:ring-[#B7F36B] [&>option]:bg-[#151A17]"
                    >
                      <option value="" disabled>
                        Select your main goal
                      </option>

                      <option value="Get more leads">
                        Get more leads
                      </option>

                      <option value="Get more sales">
                        Get more sales
                      </option>

                      <option value="Promote my business">
                        Promote my business
                      </option>

                      <option value="Build a website">
                        Build a website
                      </option>

                      <option value="Automate my business">
                        Automate my business
                      </option>

                      <option value="Not sure yet">
                        Not sure yet
                      </option>
                    </select>
                  </div>

                  {/* PRIVACY */}
                  <p className="flex items-center justify-center gap-2 text-xs text-white/40">
                    <Lock className="h-3.5 w-3.5 shrink-0" />
                    No spam. Just a conversation about growing your business.
                  </p>

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-14 w-full rounded-xl bg-[#B7F36B] text-base font-bold text-[#090C0B] transition-colors duration-200 hover:bg-[#c9ff82] sm:hover:shadow-[0_0_25px_rgba(183,243,107,0.15)]"
                  >
                    {status === "sending" ? (
                      "Opening WhatsApp..."
                    ) : (
                      <>
                        Claim My Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* SUCCESS MESSAGE */}
                  {status === "success" && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="flex items-center justify-center gap-2 text-center text-sm text-[#B7F36B]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      WhatsApp opened! Send the message to get started.
                    </p>
                  )}

                  {/* ERROR MESSAGE */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="text-center text-sm"
                    >
                      <p className="mb-2 text-red-400">
                        Unable to open WhatsApp.
                      </p>

                      <a
                        href="https://wa.me/919566515735"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B7F36B] underline underline-offset-4"
                      >
                        Contact us directly
                      </a>
                    </div>
                  )}

                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
