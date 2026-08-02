"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Gaurang<span className="text-signal">.</span>Agarwal
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 font-mono text-sm sm:flex">
          {links.map((link, i) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="flex items-center gap-2">
                <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                <Link
                  href={link.href}
                  className={`underline-fade pb-0.5 ${
                    active ? "text-signal" : "text-ink hover:text-signal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-4 py-1.5 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 pb-4 font-mono text-sm sm:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 ${active ? "text-signal" : "text-ink"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block py-2 text-signal"
            >
              Resume ↓
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
