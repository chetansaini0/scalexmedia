"use client";

import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { pricing } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={["CHOOSE YOUR", "LEVEL OF SCALE."]} className="section-display" />
        <PlaceholderNote>{pricing.disclaimer}</PlaceholderNote>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {pricing.plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.06}>
              <article
                className={cn(
                  "flex h-full flex-col border p-7 md:p-8",
                  plan.recommended
                    ? "border-accent bg-bg-elevated"
                    : "border-line bg-bg",
                )}
              >
                {plan.recommended ? (
                  <p className="label !text-accent mb-4">Recommended</p>
                ) : (
                  <p className="label mb-4">Package</p>
                )}
                <h3 className="display text-[48px]">{plan.name}</h3>
                <p className="mt-3 min-h-[48px] text-muted">{plan.description}</p>
                <p className="mt-8">
                  <span className="display text-[42px]">{plan.price}</span>
                  <span className="ml-2 text-muted">{plan.period}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[16px]">
                      <span className="text-accent">/</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#contact"
                  className={cn(
                    "mt-10 w-full",
                    plan.recommended
                      ? "bg-accent text-accent-ink hover:bg-fg"
                      : "border border-line-strong hover:border-accent hover:text-accent",
                  )}
                >
                  Get started
                </MagneticButton>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-muted">{pricing.note}</p>
      </div>
    </section>
  );
}
