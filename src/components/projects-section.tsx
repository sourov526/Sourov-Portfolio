import { projects } from "@/data/projects";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      delay={0.15}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-slate-800/50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-8 top-8 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-8 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <SectionHeading title="Projects" className="text-center" />
      <ul className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </ul>
    </AnimatedSection>
  );
}
