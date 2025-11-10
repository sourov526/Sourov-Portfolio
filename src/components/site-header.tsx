import { primaryNav, siteConfig } from "@/data/site";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-[color:var(--card)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Link href="/" className="text-lg font-semibold text-white">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-slate-400">{siteConfig.role}</p>
        </div>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 text-lg font-semibold text-slate-200 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <div className="block px-4 pb-4 md:hidden">
        <nav className="flex gap-1 overflow-x-auto text-lg font-semibold text-slate-200">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/5 px-5 py-2.5 text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
