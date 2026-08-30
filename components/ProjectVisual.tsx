import { CaseStudy } from "@/data/projects";

export function ProjectVisual({
  project,
  className = "",
}: {
  project: CaseStudy;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(160deg, ${project.tone.from} 0%, ${project.tone.to} 120%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="absolute top-6 right-6 left-6 flex items-start justify-between">
        <span className="label !text-white/70">{project.number}</span>
        <span className="label !text-white/70">{project.industry}</span>
      </div>
      <div className="absolute right-6 bottom-6 left-6">
        <p className="display text-[12vw] leading-none text-white/95 md:text-[64px] lg:text-[76px]">
          {project.client}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/20 px-3 py-1 text-[11px] tracking-[0.12em] text-white/80 uppercase"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
      <span
        className="absolute top-1/2 right-[12%] h-24 w-24 -translate-y-1/2 rounded-full opacity-80"
        style={{ background: project.tone.accent, filter: "blur(18px)" }}
        aria-hidden="true"
      />
    </div>
  );
}
