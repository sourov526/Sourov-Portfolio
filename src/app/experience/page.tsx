import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Highlights from Brand Cloud Inc. and Confidence Group that shaped my full-stack and DevOps perspective.",
};

export default function ExperiencePage() {
  return (
    <div className="">
      <AnimatedSection className="">
        <SectionHeading
          eyebrow="Experience"
          title="Turning high-stakes roadmaps into shipped software"
        />
        <p className="mt-4 text-lg text-slate-200">
          From automating data flows for Japanese teams to strengthening DevOps
          practices at Confidence Group, I operate where curiosity meets
          accountability. Here is how those chapters unfolded.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <ul className="space-y-10">
          {experiences.map((experience, index) => (
            <li
              key={experience.company}
              className="flex flex-col gap-4 border-l border-white/10 pl-6 md:flex-row md:gap-10"
            >
              <div className="md:w-1/2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-sm font-semibold text-white shadow-lg">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {experience.start} — {experience.end}
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="text-base text-slate-300">{experience.company}</p>
                <p className="text-sm text-slate-400">{experience.location}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Impact
                  </p>
                  <ul className="mt-3 list-disc space-y-3 pl-5 text-slate-200">
                    {experience.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </div>
  );
}
