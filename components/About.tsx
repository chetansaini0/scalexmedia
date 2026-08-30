"use client";

import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/team";

export function About() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <p className="label">Manifesto</p>
        <LineReveal lines={["SOCIAL IS NOT", "A CHECKLIST."]} className="section-display mt-6" />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-8">
            {about.manifesto.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}>
                <p
                  className={
                    index === 1
                      ? "display text-[40px] md:text-[56px]"
                      : "max-w-2xl text-[20px] text-muted md:text-[22px]"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col justify-end">
            <ol className="space-y-4">
              {about.chain.map((item, index) => (
                <li key={item} className="flex items-center gap-4 border-t border-line pt-4">
                  <span className="label !text-accent w-8">0{index + 1}</span>
                  <span className="display text-[28px] md:text-[36px]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
