"use client";

import { FormEvent, useState } from "react";
import { LineReveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "website", label: "Website / Instagram", type: "text", required: false },
] as const;

const budgets = ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹4L", "₹4L+", "Not sure yet"];
const needs = [
  "Strategy",
  "Content",
  "Reels",
  "Paid social",
  "Full retainership",
  "Not sure yet",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line px-4 py-20 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1680px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <LineReveal lines={["TELL US", "THE BRIEF."]} className="section-display" />
          <p className="mt-8 max-w-md text-muted">
            Attention is the new currency. Tell us where the brand is today — we&apos;ll show you the next scale.
          </p>
        </div>

        {status === "success" ? (
          <div className="flex min-h-[420px] flex-col justify-center border border-accent/40 bg-bg-elevated p-8">
            <p className="label !text-accent">Received</p>
            <p className="display mt-6 text-[48px] md:text-[64px]">We&apos;ll be in touch.</p>
            <p className="mt-5 max-w-sm text-muted">
              Your note is with the team. If it&apos;s urgent, email hello@scalexmedia.com.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="label">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.name === "email" ? "email" : field.name === "name" ? "name" : field.name === "phone" ? "tel" : field.name === "company" ? "organization" : "url"}
                  inputMode={field.name === "phone" ? "tel" : field.name === "email" ? "email" : undefined}
                  className="mt-2 min-h-12 w-full border-b border-line-strong bg-transparent py-3 text-base outline-none transition-colors focus:border-accent"
                />
              </label>
            ))}
            <label className="block">
              <span className="label">Industry</span>
              <input
                name="industry"
                className="mt-2 min-h-12 w-full border-b border-line-strong bg-transparent py-3 text-base outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="label">Monthly marketing budget</span>
              <select
                name="budget"
                defaultValue=""
                className="mt-2 min-h-12 w-full appearance-none border-b border-line-strong bg-transparent py-3 text-base outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Select
                </option>
                {budgets.map((item) => (
                  <option key={item} value={item} className="bg-bg">
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="label">What do you need help with?</span>
              <select
                name="need"
                defaultValue=""
                className="mt-2 min-h-12 w-full appearance-none border-b border-line-strong bg-transparent py-3 text-base outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Select
                </option>
                {needs.map((item) => (
                  <option key={item} value={item} className="bg-bg">
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="label">Tell us about your goals</span>
              <textarea
                name="goals"
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-line-strong bg-transparent py-3 text-base outline-none focus:border-accent"
              />
            </label>
            <div className="md:col-span-2">
              <MagneticButton
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "w-full bg-accent text-accent-ink hover:bg-fg sm:w-auto",
                  status === "sending" && "opacity-70",
                )}
              >
                {status === "sending" ? "Sending" : "Let's scale"}
              </MagneticButton>
              {status === "error" ? (
                <p className="mt-4 text-[15px] text-muted" role="alert">
                  Something went wrong. Please try again or email hello@scalexmedia.com.
                </p>
              ) : null}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
