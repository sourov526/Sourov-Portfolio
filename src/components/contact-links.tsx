import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const contacts = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: siteConfig.email,
    icon: Mail,
  },
];

export function ContactLinks() {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {contacts.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noreferrer"}
            className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-200 transition hover:border-purple-400/50 hover:bg-purple-500/5"
          >
            <span className="rounded-full border border-white/10 bg-white/5 p-3 text-purple-200 transition group-hover:border-purple-400/40 group-hover:bg-purple-500/10">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-400">
                {label}
              </p>
              <p className="break-all text-lg font-semibold">
                {label === "Email"
                  ? href.replace("mailto:", "")
                  : href.replace("https://", "")}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
