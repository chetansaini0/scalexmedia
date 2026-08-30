import { marqueeItems } from "@/data/marquee";

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`flex w-max items-center gap-8 pr-8 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
    >
      {items.map((item, index) => (
        <span key={`${item.text}-${index}`} className="flex items-center gap-8">
          <span
            className={`display whitespace-nowrap ${
              item.size === "lg" ? "text-[28px] md:text-[68px]" : "text-[16px] text-muted md:text-[32px]"
            }`}
          >
            {item.text}
          </span>
          <span className="text-accent" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Capabilities" className="border-y border-line py-5 overflow-hidden">
      <div className="flex">
        <Track />
      </div>
      <div className="mt-2 flex opacity-50">
        <Track reverse />
      </div>
    </section>
  );
}
