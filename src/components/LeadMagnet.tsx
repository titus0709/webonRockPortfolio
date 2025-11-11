"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Comprehensive website analysis",
  "SEO performance review",
  "Mobile responsiveness check",
  "Speed optimization recommendations",
  "Actionable improvement plan",
];

export default function LeadMagnet() {
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">(
    ""
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formEl = formRef.current ?? (e.currentTarget as HTMLFormElement);
    const fd = new FormData(formEl);

    if (!fd.has("website")) {
      const websiteInput = formEl.querySelector<HTMLInputElement>(
        'input[name="website"], input#website, input[id="website"]'
      );
      if (websiteInput && websiteInput.value.trim()) {
        fd.set("website", websiteInput.value.trim());
      }
    }

    if (fd.has("website")) {
      let site = String(fd.get("website") || "").trim();
      if (site && !/^https?:\/\//i.test(site)) site = `https://${site}`;
      fd.set("website", site);
    }

    const payloadObj = Object.fromEntries(fd.entries()) as Record<string, any>;
    payloadObj.source =
      typeof window !== "undefined" ? window.location.href : "";
    payloadObj.form_type = "SEO_AUDIT_FORM";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadObj),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.status === "success") {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error("Network error:", err);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#01A959] to-[#018f4d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Right on md+, but show form first on mobile for conversions */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                  Get Your Free Mini SEO Audit
                </h2>
                <p className="text-gray-800 mb-5 leading-relaxed">
                  Discover how your website performs and receive clear,
                  prioritized recommendations to improve visibility and speed.
                </p>

                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-900"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5 bg-green-600 rounded-full p-[2px]" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-gray-700">
                  No credit card required. Results delivered within 24 hours.
                </p>
              </div>

              {/* Form */}
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    aria-labelledby="leadmagnet-heading"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Website URL
                      </label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        className="w-full"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3 text-base sm:py-4 sm:text-lg bg-[#01A959] hover:bg-[#018f4d] text-white"
                    >
                      {status === "sending" ? "Sending..." : "Get My Free Audit"}
                    </Button>

                    {/* Accessible status messages */}
                    <div
                      aria-live="polite"
                      className="min-h-[1.25rem] flex items-center justify-center"
                    >
                      {status === "success" && (
                        <p className="text-sm text-green-700 font-medium">
                          ✅ Your audit request has been submitted!
                        </p>
                      )}

                      {status === "error" && (
                        <p className="text-sm text-red-600 font-medium">
                          ❌ Something went wrong. Please try again.
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. We’ll only use this info to send
                      the audit.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Optional: small footer text visible on larger screens */}
            <div className="mt-6 text-center md:text-left text-xs text-gray-600">
              <span className="hidden md:inline">
                This mini audit covers basic SEO checks. For a full audit,
                contact our team.
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
