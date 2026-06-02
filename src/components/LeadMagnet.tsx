"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Globe,
  Mail,
  User,
  Send,
  Lock,
  Zap,
} from "lucide-react";

type Step = "website" | "contact" | "success";

const auditItems = [
  "Website performance score",
  "SEO health & keyword gaps",
  "Mobile & speed check",
  "Top 3 action items to fix now",
];

export default function LeadMagnet() {
  const [step, setStep] = useState<Step>("website");
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [websiteVal, setWebsiteVal] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const progress = step === "website" ? 50 : step === "contact" ? 100 : 100;

  const handleStep1 = () => {
    if (!websiteVal.trim()) return;
    setStep("contact");
  };

  const handleSubmit = async () => {
    if (!firstName.trim() || !email.trim()) return;
    setStatus("sending");

    let site = websiteVal.trim();
    if (site && !/^https?:\/\//i.test(site)) site = `https://${site}`;

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      website: site,
      source: typeof window !== "undefined" ? window.location.href : "",
      form_type: "SEO_AUDIT_FORM",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === "success") {
        setStep("success");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#01A959] to-[#018f4d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top bar */}
          <div className="bg-[#01A959] px-6 py-5">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-3">
              <Zap className="w-3 h-3" /> Free · Results in 24h
            </span>
            <h2 className="text-white text-xl font-bold leading-snug mb-1">
              Get your free mini SEO audit
            </h2>
            <p className="text-white/80 text-sm">
              {step === "website"
                ? "Step 1 of 2 — enter your website"
                : step === "contact"
                ? "Step 2 of 2 — almost done!"
                : "Audit request received!"}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-white/20 bg-[#01A959]">
            <div
              className="h-full bg-[#01A959] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="h-1 bg-gray-100">
            <div
              className="h-full bg-[#01A959] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6">
            {/* Social proof */}
            {step !== "success" && (
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5 mb-5">
                <div className="flex -space-x-1.5">
                  {["JK", "SR", "PM"].map((initials) => (
                    <div
                      key={initials}
                      className="w-6 h-6 rounded-full bg-[#01A959] text-white text-[10px] font-medium flex items-center justify-center border-2 border-white"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">
                    127 audits
                  </span>{" "}
                  sent this week
                </p>
              </div>
            )}

            {/* Step 1 */}
            {step === "website" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">
                  Your website URL
                </label>
                <div className="relative mb-4">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={websiteVal}
                    onChange={(e) => setWebsiteVal(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleStep1()}
                    className="pl-9"
                    autoComplete="url"
                    autoFocus
                  />
                </div>
                <Button
                  onClick={handleStep1}
                  className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-3 text-sm font-medium"
                >
                  Analyze my site <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-3">
                  <Lock className="w-3 h-3" /> No credit card. No spam. Unsubscribe anytime.
                </p>
              </div>
            )}

            {/* Step 2 */}
            {step === "contact" && (
              <div>
                <button
                  onClick={() => setStep("website")}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-4"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">
                      First name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="pl-9"
                        autoComplete="given-name"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">
                      Last name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="pl-9"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                </div>
                <label className="block text-sm text-gray-600 mb-1.5">
                  Email address
                </label>
                <div className="relative mb-4">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="pl-9"
                    autoComplete="email"
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-3 text-sm font-medium"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send me the audit <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
                <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-3">
                  <Lock className="w-3 h-3" /> We'll only use this to send your audit.
                </p>
              </div>
            )}

            {/* Success */}
            {step === "success" && (
              <div className="text-center py-2">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#01A959]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  You're all set, {firstName}!
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your SEO audit is on the way. Check your inbox within 24 hours.
                </p>
                <ul className="text-left divide-y divide-gray-100">
                  {auditItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 py-2.5 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#01A959] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}