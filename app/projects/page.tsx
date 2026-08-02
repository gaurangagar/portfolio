import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Gaurang Agarwal",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
        Projects
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Things I&apos;ve built
      </h1>
      <p className="mt-5 max-w-xl text-muted">
        Full-stack products, mostly involving an LLM somewhere in the request
        path.
      </p>

      <div className="mt-16 flex flex-col divide-y divide-line">
        {projects.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-24 py-12 first:pt-0"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                {project.name}
              </h2>
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="underline-fade font-mono text-sm text-ink hover:text-signal"
              >
                {project.link.label} ↗
              </a>
            </div>
            <p className="mt-3 max-w-2xl text-muted">{project.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-line px-3 py-1 font-mono text-xs text-ink"
                >
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 flex max-w-2xl flex-col gap-3">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
