import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="space-y-30">
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
