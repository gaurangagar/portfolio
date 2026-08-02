import Link from "next/link";
import { profile, projects, ratings, skills } from "@/lib/data";
import RatingBar from "@/components/RatingBar";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[78vh] flex-col justify-center py-16 sm:py-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-signal">
          {profile.role}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
          <Link
            href="/projects"
            className="rounded-full bg-ink px-6 py-3 text-paper transition-colors hover:bg-signal"
          >
            View projects →
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line px-6 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Rating ladder — signature element */}
      <section className="border-t border-line py-14 sm:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Rated on the clock
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
              Competitive programming standings
            </h2>
          </div>
          <Link
            href="/achievements"
            className="underline-fade hidden font-mono text-sm text-ink hover:text-signal sm:inline"
          >
            All achievements →
          </Link>
        </div>
        <div className="flex flex-col gap-7">
          {ratings.map((r) => (
            <RatingBar key={r.platform} entry={r} />
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-line py-14 sm:py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
          Selected work
        </p>
        <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
          Two things I shipped recently
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group rounded-2xl border border-line p-7 transition-colors hover:border-signal"
            >
              <h3 className="font-display text-xl font-medium text-ink group-hover:text-signal">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.tagline}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-line px-3 py-1 font-mono text-xs text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills strip */}
      <section className="border-t border-line py-14 sm:py-20">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
          Toolbox
        </p>
        <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-signal">
                {group.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
