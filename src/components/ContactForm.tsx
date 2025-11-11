"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  title?: string;
  description?: string;
  showBudget?: boolean;
};

export default function ContactForm({
  id,
  title = "Ready to Rank Higher?",
  description = "Let's discuss your SEO goals and create a custom strategy for your business.",
  showBudget = false,
  className,
  ...rest
}: ContactFormProps) {
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formEl = formRef.current ?? (e.currentTarget as HTMLFormElement);
    const payload = Object.fromEntries(new FormData(formEl).entries()) as Record<string, any>;
    payload.source = typeof window !== "undefined" ? window.location.href : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === "success") {
        setStatus("success");
        formEl.reset();
      } else {
        console.error("Proxy/upstream error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id={id ?? "contactform"}
      className={`py-16 px-6 md:px-12 lg:px-20 rounded-2xl ${className ?? ""}`}
      {...rest}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
        <p className="text-gray-600 mb-10">{description}</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-6 bg-white p-8 rounded-2xl shadow-md"
      >
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Your Name *</label>
          <Input name="name" type="text" required placeholder="John Doe" />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Email Address *</label>
          <Input name="email" type="email" required placeholder="you@example.com" />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">What type of project are you looking for?</label>
          <Input name="project_type" type="text" placeholder="Website, App, Branding, SEO..." />
        </div>

        {showBudget && (
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">What’s your approximate budget?</label>
            <Input name="budget" type="text" placeholder="₹20,000 – ₹1,00,000" />
          </div>
        )}

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Tell us more about your goals</label>
          <Textarea name="details" placeholder="Describe what you want to achieve..." rows={5} />
        </div>

        <Button type="submit" disabled={status === "sending"} className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-6 text-lg">
          {status === "sending" ? "Sending..." : "Submit Project"}
        </Button>

        {status === "success" && <p className="text-green-600 text-center font-medium">✅ Thanks! We'll get in touch soon.</p>}
        {status === "error" && (
          <div className="text-center">
            <p className="text-red-600 font-medium">❌ Something went wrong. Please try again later.</p>
            <p className="text-gray-600">Contact Us at</p>
            <a href="mailto:buildwithwebonrock@gmail.com" className="text-gray-600">buildwithwebonrock@gmail.com</a>
          </div>
        )}
      </form>
    </section>
  );
}
