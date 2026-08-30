"use client";

import { useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";

const phones = [
  {
    handle: "@atelier.gold",
    title: "Drop 04",
    metric: "128.4k",
    caption: "Quiet luxury, loud stop.",
    tone: "from-[#1a1208] to-[#c9a227]",
    delay: "float-a",
  },
  {
    handle: "@stay.palace",
    title: "Suite 107",
    metric: "94.2k",
    caption: "A stay people can feel.",
    tone: "from-[#14100c] to-[#8b5a2b]",
    delay: "float-b",
  },
  {
    handle: "@scale.lab",
    title: "Hook test",
    metric: "3.8%",
    caption: "CTR on winning reel.",
    tone: "from-[#0c1408] to-[#6d8f1a]",
    delay: "float-a",
  },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    node.style.setProperty("--px", `${x}px`);
    node.style.setProperty("--py", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative mx-auto mt-6 h-[480px] w-full max-w-[560px] [--px:0px] [--py:0px] lg:mt-0 lg:h-[560px]"
      data-cursor="explore"
      aria-hidden="true"
    >
      <div className="absolute inset-x-8 top-6 h-px bg-line-strong" />
      <div className="absolute top-4 left-8 label !text-[10px]">Control room</div>
      <div className="absolute top-4 right-8 label !text-[10px] !text-accent">Live</div>

      {phones.map((phone, index) => (
        <article
          key={phone.handle}
          className={`absolute w-[168px] overflow-hidden rounded-[28px] border border-white/10 bg-black p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:w-[188px] ${phone.delay}`}
          style={{
            left: index === 0 ? "6%" : index === 1 ? "36%" : "58%",
            top: index === 0 ? "12%" : index === 1 ? "4%" : "28%",
            zIndex: index === 1 ? 3 : 2,
            animation: `${phone.delay === "float-a" ? "float-a" : "float-b"} ${7 + index}s ease-in-out infinite`,
            transform: `translate3d(var(--px), var(--py), 0) rotate(${index === 0 ? -8 : index === 1 ? 2 : 10}deg)`,
          }}
        >
          <div className={`relative aspect-[9/16] overflow-hidden rounded-[22px] bg-linear-to-b ${phone.tone}`}>
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-3">
              <span className="text-[10px] tracking-[0.14em] text-white/80 uppercase">{phone.handle}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <div className="absolute inset-x-3 top-1/3">
              <p className="display text-[34px] text-white">{phone.title}</p>
              <p className="mt-2 text-[11px] text-white/70">{phone.caption}</p>
            </div>
            <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
              <span className="text-[11px] text-white/80">▶ 00:07</span>
              <span className="rounded-full bg-black/40 px-2 py-1 text-[11px] text-accent">{phone.metric}</span>
            </div>
          </div>
        </article>
      ))}

      <aside
        className="absolute top-[58%] left-0 w-[168px] rounded-2xl border border-line bg-bg-elevated/90 p-4 backdrop-blur-sm"
        style={{ transform: "translate3d(calc(var(--px) * -0.6), calc(var(--py) * -0.6), 0)" }}
      >
        <p className="label !text-[10px]">Reach</p>
        <p className="display mt-2 text-[42px] text-accent">
          <CountUp value={2.8} prefix="+" suffix="M" decimals={1} />
        </p>
        <p className="mt-1 text-[12px] text-muted">Placeholder metric</p>
      </aside>

      <aside
        className="absolute right-0 bottom-6 w-[180px] rounded-2xl border border-line bg-bg-elevated/90 p-4 backdrop-blur-sm"
        style={{ transform: "translate3d(calc(var(--px) * 0.5), calc(var(--py) * 0.4), 0)" }}
      >
        <p className="label !text-[10px]">Campaign</p>
        <p className="mt-2 text-[15px]">Hook / Offer / Proof</p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-line-strong">
          <div className="h-full w-2/3 bg-accent" />
        </div>
        <p className="mt-2 text-[12px] text-muted">Creative test 03</p>
      </aside>
    </div>
  );
}
