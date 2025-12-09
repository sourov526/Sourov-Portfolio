import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" delay={0.1}>
      <SectionHeading title="Skills" className="text-center" />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-sky-900/30 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-sky-500/30"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow-sm">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {category.summary}
                </p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-inset ring-white/15 backdrop-blur">
                {category.items.length} skills
              </span>
            </div>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-50 ring-1 ring-inset ring-white/15 shadow-sm shadow-sky-900/40 backdrop-blur transition group-hover:ring-sky-300/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
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
