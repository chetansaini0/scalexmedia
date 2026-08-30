"use client";

import { useState } from "react";
import { LineReveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={["QUESTIONS,", "STRAIGHT."]} className="section-display" />

        <div className="mt-16 divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span className="display text-[22px] md:text-[32px]">{faq.question}</span>
                    <span className="mt-1 text-accent" aria-hidden="true">
                      {expanded ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-400",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-[17px] text-muted md:text-[18px]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
