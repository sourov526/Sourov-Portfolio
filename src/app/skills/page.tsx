import { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Skills | Sourov Dey",
  description:
    "A closer look at the front-end, back-end, AI, and delivery skills I apply to ship reliable products.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <AnimatedSection className="bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/40">
        <SectionHeading
          eyebrow="Capabilities"
          title="The toolbox behind my full-stack delivery"
        />
        <p className="mt-4 text-lg text-slate-200">
          Every engagement blends thoughtful product conversations with strong
          engineering fundamentals. These are the technologies and practices I
          rely on most often when transforming requirements into delightful user
          outcomes.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
    </div>
  );
}
