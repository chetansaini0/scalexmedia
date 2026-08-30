"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LineReveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const tones = {
  lime: "from-[#101408] to-[#3d4f10]",
  warm: "from-[#16120e] to-[#4a3420]",
  steel: "from-[#101214] to-[#2a3338]",
  gold: "from-[#16120a] to-[#5a4314]",
};

export function Services() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const current = services[active] ?? services[0];

  return (
    <section id="services" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal
          lines={["EVERYTHING", "YOUR BRAND NEEDS", "TO GROW ONLINE."]}
          className="section-display max-w-5xl"
        />

        <div className="mt-16 hidden grid-cols-[1fr_0.9fr] gap-16 lg:grid">
          <ul>
            {services.map((service, index) => (
              <li key={service.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    "flex w-full items-baseline gap-6 border-t border-line py-6 text-left transition-colors",
                    active === index ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  <span className={cn("label w-10", active === index && "!text-accent")}>
                    {service.number}
                  </span>
                  <span className="display text-[34px] xl:text-[42px]">{service.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="sticky top-28 h-fit">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[28px] border border-line"
                data-cursor="explore"
              >
                <div className={cn("relative aspect-[4/3] bg-linear-to-br p-8", tones[current.preview.tone])}>
                  <p className="label !text-accent">{current.preview.label}</p>
                  <p className="display mt-8 text-[88px] text-fg">{current.preview.stat}</p>
                  <p className="label mt-2">{current.preview.statLabel}</p>
                  <ul className="absolute right-8 bottom-8 space-y-2 text-right">
                    {current.preview.lines.map((line) => (
                      <li key={line} className="text-[14px] text-fg/80">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-elevated p-8">
                  <h3 className="display text-[32px]">{current.title}</h3>
                  <p className="mt-4 max-w-md text-muted">{current.description}</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 space-y-3 lg:hidden">
          {services.map((service, index) => {
            const expanded = open === index;
            return (
              <article key={service.id} className="border border-line">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  <span>
                    <span className="label !text-accent">{service.number}</span>
                    <span className="display mt-2 block text-[28px]">{service.title}</span>
                  </span>
                  <span className="text-accent" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-400",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className={cn("mx-5 mb-5 aspect-[16/10] bg-linear-to-br p-5", tones[service.preview.tone])}>
                      <p className="display text-[48px]">{service.preview.stat}</p>
                      <p className="label mt-1">{service.preview.statLabel}</p>
                    </div>
                    <p className="px-5 pb-5 text-muted">{service.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
