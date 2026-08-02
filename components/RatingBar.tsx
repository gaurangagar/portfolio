import type { RatingEntry } from "@/lib/data";

export default function RatingBar({ entry }: { entry: RatingEntry }) {
  const pct = Math.min(100, Math.round((entry.rating / entry.max) * 100));

  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between font-mono text-sm">
        <a
          href={entry.handleHref}
          target="_blank"
          rel="noreferrer"
          className="underline-fade text-ink"
        >
          {entry.platform} <span className="text-muted">· {entry.handle}</span>
        </a>
        <span className="flex items-center gap-2">
          <span style={{ color: entry.color }} className="font-semibold">
            {entry.tier}
          </span>
          <span className="text-muted">{entry.rating}</span>
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: entry.color }}
        />
      </div>
    </div>
  );
}
