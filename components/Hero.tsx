"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { easeOut } from "@/lib/animations";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-[1680px] items-center gap-8 px-4 md:gap-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="label">{site.eyebrow}</p>
          <h1 className="display hero-display mt-6">
            {site.heroHeadline.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.12 + index * 0.08, ease: easeOut }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-6 max-w-xl text-[16px] text-muted md:mt-8 md:text-[20px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: easeOut }}
          >
            {site.heroSupport}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: easeOut }}
          >
            <MagneticButton
              href="#contact"
              className="w-full bg-accent text-accent-ink hover:bg-fg sm:w-auto"
            >
              Start a project
            </MagneticButton>
            <MagneticButton
              href="#work"
              cursor="view"
              className="w-full border border-line-strong text-fg hover:border-accent hover:text-accent sm:w-auto"
            >
              See our work
            </MagneticButton>
          </motion.div>
          <p className="label mt-8 flex flex-wrap gap-x-3 gap-y-1 !text-[11px] md:mt-10">
            {site.heroTrust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
