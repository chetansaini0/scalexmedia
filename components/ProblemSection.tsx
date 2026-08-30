"use client";

import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { problems } from "@/data/problems";

export function ProblemSection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={problems.headline} className="section-display" />
        <LineReveal
          lines={problems.subhead}
          className="section-display mt-8 text-muted"
          as="p"
        />

        <ul className="mt-16 max-w-3xl space-y-5 md:mt-24">
          {problems.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <li className="flex items-baseline gap-4 border-t border-line pt-5 md:gap-5">
                <span className="label !text-accent w-8 shrink-0 md:w-10">0{index + 1}</span>
                <p className="display text-[22px] leading-[1.15] md:text-[42px]">{item}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-24 md:mt-36">
          <LineReveal lines={problems.closer} className="section-display text-accent" />
        </div>
      </div>
    </section>
  );
}
