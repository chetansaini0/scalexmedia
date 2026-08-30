"use client";

import { useEffect, useState } from "react";

type CursorMode = "default" | "view" | "go" | "explore";

const labels: Record<CursorMode, string> = {
  default: "",
  view: "VIEW",
  go: "LET'S GO →",
  explore: "EXPLORE",
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
      const target = (event.target as HTMLElement | null)?.closest("[data-cursor]");
      const next = (target?.getAttribute("data-cursor") as CursorMode | null) ?? "default";
      setMode(next);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  const expanded = mode !== "default";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden mix-blend-difference md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-fg text-bg transition-[width,height,background-color] duration-300 ease-out"
        style={{
          width: expanded ? "auto" : 10,
          height: expanded ? 34 : 10,
          paddingInline: expanded ? 14 : 0,
          marginTop: expanded ? -17 : -5,
          marginLeft: expanded ? -28 : -5,
        }}
      >
        {expanded ? (
          <span className="label !text-[10px] !text-bg whitespace-nowrap">
            {labels[mode]}
          </span>
        ) : null}
      </div>
    </div>
  );
}
