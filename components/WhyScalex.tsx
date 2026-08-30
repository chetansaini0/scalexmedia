"use client";

import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/data/differentiators";

export function WhyScalex() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal
          lines={["NOT ANOTHER", "SOCIAL MEDIA", "AGENCY."]}
          className="section-display"
        />
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="bg-bg p-8 md:p-10">
              <p className="label !text-accent">0{index + 1}</p>
              <h3 className="display mt-6 text-[32px] md:text-[40px]">{item.title}</h3>
              <p className="mt-5 max-w-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
