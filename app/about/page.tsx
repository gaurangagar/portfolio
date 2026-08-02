import type { Metadata } from "next";
import { coursework, education, profile, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Gaurang Agarwal",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
        About
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Education & background
      </h1>

      {/* Education */}
      <div className="mt-14 rounded-2xl border border-line p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h2 className="font-display text-xl font-medium text-ink">
            {education.school}
          </h2>
          <span className="font-mono text-sm text-muted">{education.period}</span>
        </div>
        <p className="mt-2 text-muted">{education.degree}</p>
        <p className="mt-1 font-mono text-sm text-muted">{education.location}</p>
      </div>

      {/* Coursework */}
      <div className="mt-14">
        <h2 className="font-display text-xl font-medium text-ink">
          Relevant coursework
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {coursework.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line px-4 py-2 font-mono text-sm text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h2 className="font-display text-xl font-medium text-ink">
          Technical skills
        </h2>
        <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label} className="border-t border-line pt-4">
              <h3 className="font-mono text-xs uppercase tracking-wide text-signal">
                {group.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-16 rounded-2xl bg-ink p-8 text-paper sm:p-10">
        <h2 className="font-display text-2xl font-medium">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-md text-sm text-paper/70">
          Open to internships, freelance builds, and interesting problems.
          Reach out through whichever channel is easiest.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-signal px-6 py-3 text-ink transition-colors hover:bg-paper"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-paper/30 px-6 py-3 transition-colors hover:border-paper"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
