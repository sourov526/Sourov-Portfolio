import { siteConfig } from "@/data/site";
import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";

const contactActions = [
  {
    label: "GitHub",
    icon: Github,
    href: siteConfig.github,
    external: true,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: siteConfig.linkedin,
    external: true,
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: siteConfig.facebook,
    external: true,
  },
  {
    label: "Email",
    icon: Mail,
    href: siteConfig.email,
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    external: true,
  },
];

export function Hero() {
  return (
    <AnimatedSection
      id="home"
      unstyled
      className="flex flex-col gap-8 py-10 md:min-h-[520px] md:flex-row md:items-center md:py-16"
    >
      <div className="flex flex-1 flex-col justify-center gap-6">
        <div>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-sky-300">
            {siteConfig.role}
          </p>
        </div>
        <p className="text-justify text-lg text-slate-200 md:text-xl">
          Full-stack engineer with 2+ years of remote experience delivering
          scalable, high-performance web applications for Japanese and Indian
          companies. Proficient in modern tech stack including React,
          TypeScript, and Next.js for frontend development, complemented by
          FastAPI and Next.js API routes for robust backend solutions. Focused
          on building clean, user-centric applications that bridge seamless
          frontend experiences with efficient server-side architecture.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactActions.map(({ label, icon: Icon, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="contact-button flex transform items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:-translate-y-1 hover:scale-105 hover:border-white/60 hover:bg-white/5"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/resume-sourov.pdf"
            target="_blank"
            rel="noreferrer"
            className="wave-button inline-flex items-center justify-center rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Download résumé
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/3">
        <div className="group relative flex h-full w-full items-center justify-center">
          <Image
            src="/profile.jpg"
            alt={siteConfig.name}
            width={320}
            height={320}
            priority
            className="h-40 w-40 rounded-full border border-white/20 object-cover shadow-2xl shadow-sky-900/60 ring-4 ring-white/10 transition duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 sm:h-52 sm:w-52 md:h-[90%] md:w-[90%] md:max-w-sm"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
