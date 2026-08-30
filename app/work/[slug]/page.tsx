import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectVisual } from "@/components/ProjectVisual";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} case study`,
    description: `${project.client} — ${project.industry}. ${project.problem}`,
    alternates: { canonical: `${site.url}/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const blocks = [
    { label: "Problem", body: project.problem },
    { label: "Strategy", body: project.strategy },
    { label: "Creative", body: project.creative },
    { label: "Execution", body: project.execution },
    { label: "Result", body: project.result },
    { label: "Key learning", body: project.learning },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <article className="mx-auto max-w-[1680px] px-5 md:px-8">
          <p className="label">
            {project.number} / {project.industry}
          </p>
          <h1 className="display section-display mt-6">{project.client}</h1>
          <p className="mt-6 max-w-2xl text-[20px] text-muted">
            {project.services.join(" · ")}
          </p>
          {project.isPlaceholder ? (
            <p className="label mt-4">Placeholder result: {project.resultValue}</p>
          ) : null}

          <ProjectVisual project={project} className="mt-12 aspect-[16/8]" />

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {blocks.map((block) => (
              <section key={block.label}>
                <h2 className="label !text-accent">{block.label}</h2>
                <p className="mt-4 text-[20px] md:text-[22px]">{block.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap gap-4">
            <MagneticButton href="/#contact" className="bg-accent text-accent-ink hover:bg-fg">
              Start a project
            </MagneticButton>
            <Link href="/#work" className="inline-flex min-h-12 items-center label link-underline">
              Back to work
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
