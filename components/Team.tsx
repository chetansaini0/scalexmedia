"use client";

import { LineReveal, Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { about, team } from "@/data/team";

export function Team() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <LineReveal lines={about.headline} className="section-display" />
        <p className="mt-8 max-w-xl text-[20px] text-muted">{about.intro}</p>
        <PlaceholderNote>team names and portraits go here. Roles are ready.</PlaceholderNote>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.04}>
              <article className="group overflow-hidden border border-line">
                <div className="relative aspect-[4/5] bg-bg-soft">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.85))]" />
                  <p className="absolute top-5 left-5 display text-[64px] text-white/10 transition-colors group-hover:text-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="absolute right-5 bottom-5 left-5">
                    <p className="label">{member.role}</p>
                    <p className="display mt-2 text-[28px] md:text-[34px]">{member.name}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
