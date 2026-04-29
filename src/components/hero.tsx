import { siteConfig } from "@/data/site";
import { contactActions } from "@/data/contacts";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";

export function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="flex flex-col gap-8 py-10 md:min-h-[520px] md:flex-row md:items-center md:py-16"
    >
      <div className="flex flex-1 flex-col justify-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-sky-300">
            {siteConfig.role}
          </p>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Image
            src="/sourov.jpeg"
            alt={siteConfig.name}
            width={320}
            height={320}
            priority
            className="h-40 w-40 rounded-full border border-white/20 object-cover shadow-2xl shadow-sky-900/60 ring-4 ring-white/10 transition duration-500 ease-out sm:h-52 sm:w-52"
          />
        </div>
        <p className="text-justify text-lg text-slate-200 md:text-xl">
          Full-stack engineer with 3 years of experience building scalable,
          high-performance web applications for companies in Japan and
          Bangladesh. Proficient in modern technologies including JavaScript,
          React, TypeScript, and Next.js for frontend development, with strong
          backend experience in tRPC, Prisma, PostgreSQL, Python, Django, and
          Next.js API routes. Skilled at creating clean, user-focused
          applications that combine seamless frontend experiences with
          efficient, well-structured backend architecture.
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
            href="/Md-Sourov_Resume_US_format.pdf"
            target="_blank"
            rel="noreferrer"
            className="wave-button inline-flex items-center justify-center rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Download Resume
          </Link>
        </div>
      </div>
      <div className="hidden items-center justify-center md:flex md:w-1/3">
        <div className="group relative flex h-full w-full items-center justify-center">
          <Image
            src="/sourov.jpeg"
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
