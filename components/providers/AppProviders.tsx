"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touch = window.matchMedia("(pointer: coarse)");
    const update = () => {
      setReduceMotion(motion.matches);
      setIsTouch(touch.matches);
    };
    update();
    motion.addEventListener("change", update);
    touch.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      touch.removeEventListener("change", update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: reduceMotion || isTouch ? 0 : 1.15,
        smoothWheel: !reduceMotion && !isTouch,
        syncTouch: false,
        touchMultiplier: 1,
      }}
    >
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      {children}
    </ReactLenis>
  );
}
