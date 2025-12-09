import { ContactLinks } from "./contact-links";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      delay={0.35}
      className="relative overflow-hidden bg-transparent"
    >
      <SectionHeading title="Contact" className="text-center" />
      <p className="mt-4 text-center text-lg text-slate-200">
        Ready to collaborate on AI-powered products, ship features faster, or
        tighten delivery workflows? Let’s connect.
      </p>
      <div className="relative mt-8">
        <ContactLinks />
      </div>
      <p className="relative mt-6 text-center text-sm text-slate-300">
        Prefer async? Save{" "}
        <a
          href="/resume-sourov.pdf"
          className="font-semibold text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
        >
          my résumé
        </a>{" "}
        or reach me directly at{" "}
        <a
          href={siteConfig.email}
          className="font-semibold text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
        >
          {siteConfig.email.replace("mailto:", "")}
        </a>
        .
      </p>
    </AnimatedSection>
  );
}
