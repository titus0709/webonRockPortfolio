
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = formRef.current;
    if (!formEl) return;

    setStatus("sending");

    const formData = new FormData(formEl);

    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const business = (formData.get("business") as string).trim();
    const goal = (formData.get("goal") as string) || "Not specified";

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
      className="relative overflow-hidden bg-[#090C0B] py-20 sm:py-24 lg:py-28 px-5 sm:px-6 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:55px_55px]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-[#B7F36B]/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#B7F36B]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Offer and copy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Offer badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/30 bg-[#B7F36B]/[0.09] px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#B7F36B]" />
              <span className="text-xs sm:text-sm font-semibold text-[#B7F36B]">
                SPECIAL OFFER FOR BUSINESSES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.1]">
              More Leads.
              <br />
              More Customers.
              <br />
              <span className="text-[#B7F36B]">Less Risk.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/55 leading-relaxed max-w-lg">
              Want more customers but unsure whether ads will work for your
              business? Let's test a strategy before you commit to a
              long-term partnership.
            </p>

            {/* Offer card */}
            <div className="relative mt-8 rounded-2xl border border-[#B7F36B]/25 bg-[#B7F36B]/[0.055] p-5 sm:p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7F36B]/[0.08] blur-[50px] rounded-full" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#B7F36B] flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[#090C0B]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#B7F36B] font-semibold tracking-wider uppercase">
                      Our Trial Offer
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Try Before You Commit.
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Free trial campaign management for eligible businesses",
                    "No management fee during the agreed trial",
                    "No agreed results, no management fee",
                    "A strategy focused on qualified leads, not just clicks",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B7F36B] shrink-0 mt-0.5" />
                      <p className="text-sm text-white/75 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.09]">
                  <p className="text-xs text-white/40 leading-relaxed">
                    Advertising spend is paid separately by the business.
                    Trial eligibility, duration and lead targets are agreed
                    before the campaign starts.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <Target className="w-4 h-4 text-[#B7F36B]" />
                Results-focused strategy
              </div>
              <div className="flex items-center gap-2 text-xs text-white/45">
                <TrendingUp className="w-4 h-4 text-[#B7F36B]" />
                Built for business growth
              </div>
            </div>
          </motion.div>

          {/* Lead form */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative rounded-3xl border border-white/[0.1] bg-white/[0.045] backdrop-blur-2xl p-6 sm:p-8 lg:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-[#B7F36B]/[0.08] blur-[70px] pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[#B7F36B] text-xs font-semibold tracking-wider uppercase mb-3">
                  <MessageCircle className="w-4 h-4" />
                  Get Started
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Get Your Free Trial.
                </h3>

                <p className="text-sm text-white/45 mt-2 mb-8">
                  Tell us a little about your business. Let's see how we
                  can help you get more customers.
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Your Name *
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <Input
                        id="project-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Enter your name"
                        className="h-12 pl-11 bg-white/[0.045] border-white/[0.1] text-white placeholder:text-white/30 rounded-xl focus-visible:ring-[#B7F36B] focus-visible:border-[#B7F36B]/50"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div>
                    <label
                      htmlFor="project-business"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Business Name *
                    </label>

                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <Input
                        id="project-business"
                        name="business"
                        required
                        placeholder="Your business name"
                        className="h-12 pl-11 bg-white/[0.045] border-white/[0.1] text-white placeholder:text-white/30 rounded-xl focus-visible:ring-[#B7F36B] focus-visible:border-[#B7F36B]/50"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="project-phone"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      WhatsApp Number *
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <Input
                        id="project-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="h-12 pl-11 bg-white/[0.045] border-white/[0.1] text-white placeholder:text-white/30 rounded-xl focus-visible:ring-[#B7F36B] focus-visible:border-[#B7F36B]/50"
                      />
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <label
                      htmlFor="project-goal"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      What do you need help with?
                    </label>

                    <select
                      id="project-goal"
                      name="goal"
                      defaultValue=""
                      className="w-full h-12 rounded-xl border border-white/[0.1] bg-[#151A17] px-4 text-sm text-white/70 outline-none focus:border-[#B7F36B]/50 focus:ring-1 focus:ring-[#B7F36B] [&>option]:bg-[#151A17]"
                    >
                      <option value="" disabled>
                        Select your main goal
                      </option>
                      <option value="Get more leads">Get more leads</option>
                      <option value="Get more sales">Get more sales</option>
                      <option value="Promote my business">Promote my business</option>
                      <option value="Build a website">Build a website</option>
                      <option value="Automate my business">Automate my business</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Privacy */}
                  <p className="flex items-center justify-center gap-2 text-xs text-white/35">
                    <Lock className="w-3.5 h-3.5" />
                    No spam. Just a conversation about growing your business.
                  </p>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 rounded-xl bg-[#B7F36B] hover:bg-[#c9ff82] text-[#090C0B] font-bold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(183,243,107,0.18)]"
                  >
                    {status === "sending" ? (
                      "Opening WhatsApp..."
                    ) : (
                      <>
                        Claim My Free Trial
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <p className="flex items-center justify-center gap-2 text-sm text-[#B7F36B] text-center">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      WhatsApp opened! Send the message to get started.
                    </p>
                  )}

                  {status === "error" && (
                    <div className="text-center text-sm">
                      <p className="text-red-400 mb-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
