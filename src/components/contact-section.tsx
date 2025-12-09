import { ContactLinks } from "./contact-links";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      delay={0.35}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-slate-800/50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-8 top-6 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-8 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
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
