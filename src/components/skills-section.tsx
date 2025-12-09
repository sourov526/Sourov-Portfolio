import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const gradientClasses = [
  "from-emerald-400 via-emerald-300 to-teal-400",
  "from-sky-400 via-cyan-400 to-blue-500",
  "from-amber-400 via-yellow-400 to-orange-400",
  "from-indigo-400 via-blue-500 to-sky-400",
  "from-rose-400 via-pink-400 to-red-400",
  "from-lime-300 via-emerald-300 to-teal-400",
];

const categoryPercentages: Record<string, number> = {
  "Front-End": 95,
  "Ops & Collaboration": 98,
  "DevOps & Deployment": 88,
};

const defaultPercent = 90;

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" delay={0.1}>
      <SectionHeading title="Skills" className="text-center" />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const percent = categoryPercentages[category.title] ?? defaultPercent;
          const gradient = gradientClasses[index % gradientClasses.length];

          return (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-sky-900/30 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-sky-500/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-transparent opacity-70" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                    {category.title}
                  </h3>
                  <span className="text-sm font-semibold text-slate-100">
                    {percent}%
                  </span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10 ring-1 ring-inset ring-white/15">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
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
          );
        })}
      </div>
    </AnimatedSection>
  );
}
