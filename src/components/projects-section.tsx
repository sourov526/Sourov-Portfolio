import { projects } from "@/data/projects";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" delay={0.15} className="relative overflow-hidden bg-transparent">
      <SectionHeading title="Projects" className="text-center" />
      <ul className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </ul>
    </AnimatedSection>
  );
}
