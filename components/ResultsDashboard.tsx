"use client";

import { CountUp } from "@/components/ui/CountUp";
import { LineReveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { dashboardMetrics } from "@/data/results";

function Spark({ values, id }: { values: number[]; id: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 36 - ((value - min) / (max - min || 1)) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 40" className="mt-6 h-16 w-full" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0%" stopColor="#8a8a82" />
          <stop offset="100%" stopColor="#c8f531" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ResultsDashboard() {
  return (
    <section id="results" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={["WE DON'T CHASE", "VANITY METRICS."]} className="section-display" />
        <LineReveal
          lines={["WE CHASE", "MOMENTUM."]}
          className="section-display mt-6 text-muted"
          as="p"
        />
        <PlaceholderNote>
          dashboard numbers are illustrative. Replace series in data/results.ts with live reporting.
        </PlaceholderNote>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <article key={metric.id} className="bg-bg-elevated p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="label">{metric.label}</p>
                <p className="label !text-accent">{metric.change}</p>
              </div>
              <p className="display mt-5 text-[48px] md:text-[56px]">
                <CountUp
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.value % 1 === 0 ? 0 : 1}
                />
              </p>
              <Spark values={metric.series} id={`spark-${metric.id}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
