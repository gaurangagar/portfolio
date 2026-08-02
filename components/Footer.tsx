import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6 font-mono">
          <a href={`mailto:${profile.email}`} className="underline-fade hover:text-ink">
            Email
          </a>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer" className="underline-fade hover:text-ink">
            LinkedIn
          </a>
          <a href={profile.github.href} target="_blank" rel="noreferrer" className="underline-fade hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
