"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Phone, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

type ContactFormProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  title?: string;
  description?: string;
};

export default function ContactForm({
  id,
  title = "Let's talk",
  description = "Drop your details and we'll call you back within 24 hours.",
  className,
  ...rest
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          source: typeof window !== "undefined" ? window.location.href : "",
          form_type: "CALLBACK_FORM",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === "success") setStatus("success");
    } catch (err) {
      console.error(err);
    } finally {
      if (status !== "success") setStatus("idle");
    }
  };

  return (
    <section  id={id ?? "contact"} className={className} {...rest}>
      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-sm bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#01A959] px-6 py-5">
            <h2 className="text-white text-xl font-semibold mb-1">{title}</h2>
            <p className="text-white/80 text-sm">{description}</p>
          </div>

          <div className="p-6">
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-[#01A959]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Got it, {name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-gray-500">
                  We'll call you back within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm text-gray-500 mb-1.5">Your name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-9"
                      autoComplete="name"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm text-gray-500 mb-1.5">WhatsApp / Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      className="pl-9"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-3"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-3">
                  <Lock className="w-3 h-3" /> We won't spam or share your number.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}