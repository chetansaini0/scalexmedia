"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: reduceMotion ? 0 : 1.15,
        smoothWheel: !reduceMotion,
        touchMultiplier: 1.1,
      }}
    >
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      {children}
    </ReactLenis>
  );
}
