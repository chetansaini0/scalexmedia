"use client";

import Link from "next/link";
import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="work" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={["WORK THAT", "MAKES PEOPLE", "STOP."]} className="section-display" />
        <PlaceholderNote>
          case studies use real client names where provided. Results stay marked until verified.
        </PlaceholderNote>

        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor="view"
                className="group block overflow-hidden border border-line"
              >
                <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
                  <div className="overflow-hidden">
                    <ProjectVisual
                      project={project}
                      className="aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:aspect-[16/8]"
                    />
                  </div>
                  <div className="flex flex-col justify-between bg-bg-elevated p-6 md:p-8">
                    <div>
                      <p className="label">{project.number} — {project.year}</p>
                      <h3 className="display mt-4 text-[36px] md:text-[48px]">{project.client}</h3>
                      <p className="mt-3 text-muted">{project.industry}</p>
                    </div>
                    <div className="mt-8 flex items-end justify-between gap-4">
                      <p className="text-[14px] text-muted">{project.services.join(" / ")}</p>
                      <p className="label !text-accent">
                        {project.resultValue}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
