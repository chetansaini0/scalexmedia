"use client";

import { LineReveal } from "@/components/ui/Reveal";
import { comparisonColumns, comparisonRows, ComparisonValue } from "@/data/comparison";
import { cn } from "@/lib/utils";

function Mark({ value, featured }: { value: ComparisonValue; featured?: boolean }) {
  if (value === "yes") {
    return <span className={featured ? "text-accent" : "text-fg"}>✓</span>;
  }
  if (value === "partial") {
    return <span className="text-muted">~</span>;
  }
  return <span className="text-dim">—</span>;
}

export function Comparison() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={["YOU CAN DO IT", "YOURSELF.", "BUT SHOULD YOU?"]} className="section-display" />
        <p className="mt-8 max-w-xl text-muted">
          The point is not that other options are bad. The point is what you actually get when growth is the job.
        </p>

        <div className="mt-14 overflow-x-auto no-scrollbar">
          <table className="min-w-[760px] w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="label py-5 pr-4 font-medium">Capability</th>
                {comparisonColumns.map((column) => (
                  <th
                    key={column.id}
                    className={cn(
                      "label py-5 px-4 font-medium",
                      "featured" in column && column.featured && "!text-accent bg-bg-elevated",
                    )}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.category} className="border-b border-line">
                  <th className="py-5 pr-4 font-medium">{row.category}</th>
                  <td className="px-4 py-5"><Mark value={row.diy} /></td>
                  <td className="px-4 py-5"><Mark value={row.freelancer} /></td>
                  <td className="px-4 py-5"><Mark value={row.agency} /></td>
                  <td className="bg-bg-elevated px-4 py-5">
                    <Mark value={row.scalex} featured />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="label mt-4 md:hidden">Swipe to compare</p>
      </div>
    </section>
  );
}
