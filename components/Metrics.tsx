"use client";

import { CountUp } from "@/components/ui/CountUp";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { metrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1680px] grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            className={`px-5 py-10 md:px-8 md:py-14 ${index !== 0 ? "border-l border-line" : ""}`}
          >
            <p className="display text-[48px] text-accent md:text-[72px]">
              <CountUp
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.id === "impressions" ? 1 : 0}
              />
            </p>
            <p className="label mt-3">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1680px] px-5 pb-8 md:px-8">
        <PlaceholderNote>replace these figures with verified ScalexMedia results.</PlaceholderNote>
      </div>
    </section>
  );
}
