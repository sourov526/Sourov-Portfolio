import { ContactLinks } from "./contact-links";
import { ContactForm } from "./contact-form";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" delay={0.35}>
      <SectionHeading title="Contact" className="text-center" />
      <p className="mt-3 text-center text-slate-300">
        Have a project in mind? Send a message and I will get back to you.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
        <ContactForm />
        <ContactLinks />
      </div>
    </AnimatedSection>
  );
}
