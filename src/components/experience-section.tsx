import { experiences } from "@/data/experience";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      delay={0.18}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-slate-800/50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <SectionHeading title="Experience" className="text-center" />

      <ul className="relative mt-10 space-y-8">
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-400/50 via-white/15 to-transparent" />
        {experiences.map((experience) => (
          <li key={experience.company} className="relative pl-10">
            <span className="absolute left-[7px] top-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 ring-4 ring-slate-900/80 ring-offset-2 ring-offset-slate-800" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-sky-900/30 ring-1 ring-white/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-transparent opacity-80" />
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sky-100 ring-1 ring-inset ring-white/15">
                      {experience.start} — {experience.end}
                    </span>
                    <span className="text-white/70">{experience.location}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white drop-shadow-sm">
                      {experience.role}
                    </h3>
                    <p className="text-lg font-semibold text-sky-200">
                      {experience.company}
                    </p>
                    <p className="text-sm text-slate-300">
                      Partnering with cross-functional teams to deliver resilient
                      systems and faster feedback loops.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-50 ring-1 ring-inset ring-white/15"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 ring-1 ring-white/10">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                    <p className="text-sm font-semibold text-emerald-200">
                      Impact
                    </p>
                    <ul className="mt-3 space-y-3 text-sm text-slate-100">
                      {experience.impact.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-emerald-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
