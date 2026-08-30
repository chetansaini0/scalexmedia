"use client";

import { LineReveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8">
        <LineReveal lines={["WHAT BRANDS", "WILL SAY."]} className="section-display" />
        <PlaceholderNote>
          quotes below are sample copy. Replace names, companies and photos in data/testimonials.ts.
        </PlaceholderNote>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 no-scrollbar md:px-8">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="w-[86vw] shrink-0 snap-start border border-line bg-bg-elevated p-7 md:w-[620px] md:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-line text-[13px] tracking-[0.12em]">
                {item.initials}
              </div>
              <div>
                <p className="label">{item.industry}</p>
                <p className="mt-1">{item.name}</p>
              </div>
            </div>
            <blockquote className="display mt-8 text-[28px] leading-[1.05] md:text-[36px]">
              “{item.quote}”
            </blockquote>
            <p className="mt-8 text-muted">{item.company}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
