import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" delay={0.1}>
      <SectionHeading
        eyebrow="Capabilities"
        title="A toolbox built for end-to-end delivery"
      />
      <p className="mt-4 text-slate-300">
        From crafting interfaces to shipping AI-powered automation, these are
        the disciplines I rely on to move products forward.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {category.summary}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                {category.items.length} skills
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
