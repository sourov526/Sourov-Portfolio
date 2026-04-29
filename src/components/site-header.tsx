"use client";

import { primaryNav, siteConfig } from "@/data/site";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-[color:var(--card)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div>
          <Link href="/" className="text-lg font-semibold text-white">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-slate-400">{siteConfig.role}</p>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>

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
      </div>

      <div
        id="mobile-nav"
        className={`${isMenuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"} overflow-hidden px-4 transition-all duration-200 md:hidden`}
      >
        <nav className="grid justify-items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 p-2 text-center">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleCloseMenu}
              className="w-full rounded-lg px-4 py-2 text-center text-base font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
