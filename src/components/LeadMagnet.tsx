"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "✅Comprehensive website analysis",
  "✅SEO performance review",
  "✅Mobile responsiveness check",
  "✅Speed optimization recommendations",
  "✅Actionable improvement plan"
];

export default function LeadMagnet() {
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("sending");

  const formEl = formRef.current ?? (e.currentTarget as HTMLFormElement);

  // Primary: FormData
  const fd = new FormData(formEl);

  // Fallback: if 'website' missing, try to find input manually
  if (!fd.has("website")) {
    const websiteInput = formEl.querySelector<HTMLInputElement>('input[name="website"], input#website, input[id="website"]');
    if (websiteInput && websiteInput.value.trim()) {
      fd.set("website", websiteInput.value.trim());
    }
  }

  // Optional normalization: ensure protocol
  if (fd.has("website")) {
    let site = String(fd.get("website") || "").trim();
    if (site && !/^https?:\/\//i.test(site)) site = `https://${site}`;
    fd.set("website", site);
  }

  // Log everything for debugging (remove in prod)
  const payloadObj = Object.fromEntries(fd.entries()) as Record<string, any>;
  payloadObj.source = typeof window !== "undefined" ? window.location.href : "";
  payloadObj.form_type = "SEO_AUDIT_FORM";

  console.log("Sending payload to /api/contact:", payloadObj);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadObj),
    });

    const data = await res.json().catch(() => ({}));
    console.log("API response:", res.status, data);

    if (res.ok && data.status === "success") {
      setStatus("success");
      formEl.reset();
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error("Network error:", err);
    setStatus("error");
  }
};


  return (
    <section className="py-20 bg-gradient-to-br from-[#01A959] to-[#018f4d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left: Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free Mini SEO Audit
                </h2>
                <p className="text-gray-700 mb-6">
                  Discover how your website is performing and get expert recommendations to improve your online visibility.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" required placeholder="John Doe" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL
                    </label>
                    <Input id="website" name="website" type="url" required placeholder="https://yourwebsite.com" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-6 text-lg"
                  >
                    {status === "sending" ? "Sending..." : "Get My Free Audit"}
                  </Button>

                  {status === "success" && (
                    <p className="text-green-700 text-center font-medium">
                      ✅ Your audit request has been submitted!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-red-600 text-center font-medium">
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    No credit card required. Results delivered within 24 hours.
                  </p>
                </form>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
