"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "" | "sending" | "success" | "error";

export default function StartProject() {
  const [status, setStatus] = useState<Status>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formEl = formRef.current;
    if (!formEl) return;

    const formData = new FormData(formEl);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const projectType = (formData.get("projectType") as string) || "Not specified";
    const budget = (formData.get("budget") as string) || "Not specified";
    const goals = (formData.get("goals") as string) || "Not specified";

    const message = `🚀 New Project Inquiry

👤 Name: ${name}
📧 Email: ${email}
💼 Project Type: ${projectType}
💰 Budget: ${budget}
📝 Goals: ${goals}

Sent from: ${window.location.href}`;

    const whatsappNumber = "919566515735";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    try {
      window.open(whatsappURL, "_blank");
      setStatus("success");
      formEl.reset();

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("WhatsApp open error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100" id="start-project">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Let&apos;s Grow Your Business!
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Tell us a bit about your project and we&apos;ll reach out to help bring
          your idea to life.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <Input
              name="name"
              required
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <Input
              name="projectType"
              placeholder="Website, App, E-commerce, etc."
            />
          </div>

          {/* Budget */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Approximate Budget
            </label>
            <Input
              name="budget"
              placeholder="$5,000 – $10,000"
            />
          </div> */}

          {/* Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Goals
            </label>
            <Textarea
              name="goals"
              rows={5}
              placeholder="Describe goals, timeline, and requirements..."
              className="resize-none"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-6 text-lg"
          >
            {status === "sending"
              ? "Opening WhatsApp..."
              : "Submit Project Details"}
          </Button>

          {/* Success */}
          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              ✅ WhatsApp opened. Please send the message to complete your inquiry.
            </p>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="text-center">
              <p className="text-red-600 font-medium">
                ❌ Unable to open WhatsApp.
              </p>
              <p className="text-gray-600 mt-2">Contact us directly:</p>

              <a
                href="https://wa.me/919566515735"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01A959] font-medium hover:underline"
              >
                +91 95665 15735
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}