"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineReveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="process" className="border-t border-line">
      <div className="px-5 pt-24 md:px-8 md:pt-36">
        <div className="mx-auto max-w-[1680px]">
          <LineReveal lines={["FROM IDEA", "TO IMPACT."]} className="section-display" />
        </div>
      </div>

      <div className="mt-16 hidden lg:block">
        <div ref={ref} className="relative h-[280vh]">
          <div className="sticky top-[18vh] overflow-hidden">
            <motion.ol style={{ x }} className="flex gap-8 px-8">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="w-[min(72vw,620px)] shrink-0 border border-line bg-bg-elevated p-10"
                >
                  <p className="display text-[88px] text-accent">{step.number}</p>
                  <h3 className="display mt-6 text-[56px]">{step.title}</h3>
                  <p className="mt-6 max-w-md text-[19px] text-muted">{step.description}</p>
                </li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>

      <ol className="mx-auto mt-12 max-w-[1680px] space-y-0 px-5 pb-24 lg:hidden md:px-8">
        {processSteps.map((step) => (
          <li key={step.number} className="relative border-l border-line py-8 pl-8">
            <span className="absolute top-10 left-[-5px] h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="label !text-accent">{step.number}</p>
            <h3 className="display mt-3 text-[36px]">{step.title}</h3>
            <p className="mt-3 text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
