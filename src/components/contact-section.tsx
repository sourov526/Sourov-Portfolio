import { ContactLinks } from "./contact-links";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" delay={0.35}>
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build ambitious products together"
      />
      <p className="mt-4 text-lg text-slate-300">
        I thrive in product-minded teams that favor rapid iterations, clear
        ownership, and thoughtful DX. Drop a note for collaborations, leadership
        roles, or hard problems that need pragmatic solutions.
      </p>
      <ContactLinks />
      <p className="mt-6 text-sm text-slate-400">
        Prefer async? Save{" "}
        <a
          href="/resume-sourov.pdf"
          className="font-medium text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
        >
          my résumé
        </a>{" "}
        or reach me directly at{" "}
        <a
          href={siteConfig.email}
          className="font-medium text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
        >
          {siteConfig.email.replace("mailto:", "")}
        </a>
        .
      </p>
    </AnimatedSection>
  );
}
