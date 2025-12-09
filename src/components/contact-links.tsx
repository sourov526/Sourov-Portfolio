import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const contacts = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
    kind: "external",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
    kind: "external",
  },
  {
    label: "Facebook",
    href: siteConfig.facebook,
    icon: Facebook,
    kind: "external",
  },
  {
    label: "Email",
    href: siteConfig.email,
    icon: Mail,
    kind: "email",
  },
  {
    label: "Phone",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
    kind: "external",
  },
];

export function ContactLinks() {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {contacts.map(({ label, href, icon: Icon, kind }) => {
        const display =
          label === "Phone"
            ? siteConfig.phone
            : kind === "email"
              ? href.replace("mailto:", "")
              : href.replace("https://", "");

        const isExternal = kind === "external";

        return (
          <li key={label}>
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group relative flex transform items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 shadow-md ring-1 ring-white/10 transition hover:-translate-y-1 hover:scale-105 hover:border-sky-300/50 hover:bg-sky-500/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-indigo-400/10 to-transparent opacity-80" />
              <span className="relative rounded-full border border-white/10 bg-white/10 p-3 text-sky-200 transition group-hover:border-sky-300/40 group-hover:bg-sky-400/10">
                <Icon className="h-5 w-5" />
              </span>
              <div className="relative">
                <p className="text-xs font-semibold text-sky-200">
                  {label}
                </p>
                <p className="break-all text-base font-semibold text-white">
                  {display}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
