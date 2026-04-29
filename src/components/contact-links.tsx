import { contactActions } from "@/data/contacts";
import { siteConfig } from "@/data/site";

export function ContactLinks() {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {contactActions.map(({ label, href, icon: Icon, external }) => {
        const display =
          label === "WhatsApp"
            ? siteConfig.phone
            : label === "Email"
              ? href.replace("mailto:", "")
              : href.replace("https://", "");
        const showDetail = label !== "GitHub" && label !== "LinkedIn" && label !== "Facebook";

        return (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
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
                {showDetail ? (
                  <p className="break-all text-base font-semibold text-white">
                    {display}
                  </p>
                ) : null}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
