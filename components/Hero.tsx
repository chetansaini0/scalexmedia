"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { easeOut } from "@/lib/animations";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-[1680px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
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
            className="mt-8 max-w-xl text-[18px] text-muted md:text-[20px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: easeOut }}
          >
            {site.heroSupport}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: easeOut }}
          >
            <MagneticButton
              href="#contact"
              className="bg-accent text-accent-ink hover:bg-fg"
            >
              Start a project
            </MagneticButton>
            <MagneticButton
              href="#work"
              cursor="view"
              className="border border-line-strong text-fg hover:border-accent hover:text-accent"
            >
              See our work
            </MagneticButton>
          </motion.div>
          <p className="label mt-10 !text-[11px]">
            {site.heroTrust.join("  •  ")}
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
