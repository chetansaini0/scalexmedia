"use client";

import { useRef } from "react";

const frames = [
  { label: "Drop 04", tone: "from-[#1a1208] via-[#3d2a10] to-[#c9a227]", offset: "8%" },
  { label: "Suite 107", tone: "from-[#120e0a] via-[#3a2414] to-[#8b5a2b]", offset: "34%" },
  { label: "Hook test", tone: "from-[#0a1208] via-[#1e2e0c] to-[#6d8f1a]", offset: "62%" },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    node.style.setProperty("--px", `${x}px`);
    node.style.setProperty("--py", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="hero-media-plane absolute inset-0 z-0 [--px:0px] [--py:0px]"
      data-cursor="explore"
      aria-hidden="true"
    >
      <div className="hero-film hero-drift absolute inset-0" />

      <div
        className="absolute inset-y-[12%] right-0 left-[38%] hidden md:block"
        style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
      >
        {frames.map((frame, index) => (
          <div
            key={frame.label}
            className={`absolute top-0 bottom-0 w-[28%] overflow-hidden bg-linear-to-b ${frame.tone}`}
            style={{
              left: frame.offset,
              transform: `translateY(${index === 1 ? "-4%" : index === 2 ? "6%" : "2%"})`,
              opacity: 0.88 - index * 0.06,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
            <div className="absolute inset-x-4 top-5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] text-white/55 uppercase">{frame.label}</span>
              <span className="accent-breathe h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <div className="absolute inset-x-4 bottom-8">
              <p className="display text-[clamp(1.6rem,2.4vw,2.6rem)] text-white/90">{frame.label}</p>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-white/45 uppercase">Reel frame</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-line-strong/80" />
      <div className="absolute right-4 bottom-4 label !text-[10px] !text-accent/80 md:right-8 md:bottom-6">
        Live creative
      </div>
    </div>
  );
}
