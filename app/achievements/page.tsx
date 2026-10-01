import type { Metadata } from "next";
import { achievements, ratings } from "@/lib/data";
import RatingBar from "@/components/RatingBar";

export const metadata: Metadata = {
  title: "Achievements — Gaurang Agarwal",
};

export default function AchievementsPage() {
  return (
    <section className="py-16 sm:py-24">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
        Achievements
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Rated, ranked, recorded
      </h1>
      <p className="mt-5 max-w-xl text-muted">
        Standings across the platforms where the clock doesn&apos;t stop for
        anyone.
      </p>

      <div className="mt-14 flex flex-col gap-8 rounded-2xl border border-line p-8 sm:p-10">
        {ratings.map((r) => (
          <RatingBar key={r.platform} entry={r} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl font-medium text-ink">
          Contest results
        </h2>
        <ul className="mt-6 flex flex-col divide-y divide-line">
          {achievements.map((a, i) => (
            <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              {a.href ? (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink underline-fade hover:text-signal"
                >
                  {a.title}
                </a>
              ) : (
                <span className="font-medium text-ink">{a.title}</span>
              )}
              <span className="text-sm text-muted sm:max-w-md sm:text-right">
                {a.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
