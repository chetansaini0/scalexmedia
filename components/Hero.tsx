"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { easeOut } from "@/lib/animations";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-28 md:pb-20 md:pt-32"
    >
      <HeroVisual />

      <div className="hero-atmosphere z-[1]" />

      <div className="relative z-[2] mx-auto w-full max-w-[1680px] px-4 md:px-8">
        <motion.p
          className="label"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {site.eyebrow}
        </motion.p>

        <h1 className="brand-display mt-5 max-w-[14ch] md:mt-7">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.08, ease: easeOut }}
            >
              SCALEX
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-accent"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.16, ease: easeOut }}
            >
              MEDIA
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="display hero-display mt-6 max-w-2xl text-fg/90 md:mt-8"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.75, ease: easeOut }}
        >
          {site.tagline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted md:mt-5 md:text-[17px]"
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
          transition={{ delay: 0.68, duration: 0.7, ease: easeOut }}
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
      </div>
    </section>
  );
}
