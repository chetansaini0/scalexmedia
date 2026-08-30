"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { easeOut } from "@/lib/animations";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1680px] text-center">
        <p className="label">From attention to action</p>
        <h2 className="display hero-display mx-auto mt-6 max-w-5xl">
          {site.finalCta.headline.map((line) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeOut }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[20px] text-muted">{site.finalCta.support}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MagneticButton href="#contact" className="bg-accent text-accent-ink hover:bg-fg">
            Start a project
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="border border-line-strong hover:border-accent hover:text-accent"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -right-10 bottom-8 display text-[22vw] leading-none text-white/4"
        aria-hidden="true"
      >
        SCALE
      </div>
    </section>
  );
}
