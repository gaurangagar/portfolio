export const profile = {
  name: "Gaurang Agarwal",
  role: "Full-Stack Developer & Competitive Programmer",
  tagline:
    "I build type-safe, AI-augmented web products — then go prove my algorithms hold up on the clock.",
  phone: "+91 84459 46433",
  email: "gaurangagarwal26@gmail.com",
  linkedin: {
    label: "linkedin.com/in/gaurangagarwal12",
    href: "https://linkedin.com/in/gaurangagarwal12",
  },
  github: {
    label: "github.com/gaurangagar",
    href: "https://github.com/gaurangagar",
  },
  resumeHref:
    "https://drive.google.com/uc?export=download&id=1mr9-0ujnUKPOGdBUua3k1JrQFMUw5bpv",
};

export const education = {
  school: "JSS Academy of Technical Education",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Noida, Uttar Pradesh",
  period: "Oct 2023 – Jun 2027 (Expected)",
};

export const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "System Design (LLD & HLD)",
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  link: { label: string; href: string };
  points: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "signalflow",
    name: "SignalFlow",
    tagline: "A scalable pub/sub fanout engine for email and real-time notifications.",
    stack: ["MERN", "BullMQ", "Redis", "Socket.io", "Resend"],
    link: { label: "GitHub", href: "https://github.com/gaurangagar/SignalFlow" },
    featured: true,
    points: [
      "Built a scalable pub/sub fanout engine that expands each triggered event into per-subscriber, per-channel jobs, processing 500+ events and fanning out to 5,000+ delivery jobs across email and real-time in-app channels.",
      "Engineered a fault-tolerant job pipeline with dedicated BullMQ queues and exponential-backoff retries, achieving a 98% delivery success rate via dead-letter tracking and one-click recovery of failed jobs.",
      "Developed a real-time admin dashboard with live delivery analytics via MongoDB aggregation, reducing manual failure-triage effort by ~40% through automated fault categorization and self-healing subscription cleanup.",
    ],
  },
  {
    slug: "snapshare",
    name: "SnapShare",
    tagline: "Reliable high-resolution photo delivery with secure client galleries.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma ORM", "AWS S3/R2", "Vitest"],
    link: { label: "GitHub", href: "https://github.com/gaurangagar/snapshare" },
    featured: true,
    points: [
      "Engineered an asynchronous media upload pipeline using Next.js 16, TypeScript, and AWS S3/R2, handling concurrent batches of 50+ high-resolution photos with 100% reliability via automated disk fallback.",
      "Implemented multi-tier RBAC and a zero-login client portal using Bcrypt and HTTP-only JWTs, achieving <120 ms PIN verification latency and 0% unauthorized data leakage.",
      "Optimized PostgreSQL queries using Prisma ORM and composite indexing to cut latency by 40%, establishing Vitest automated suites with 100% test coverage across security workflows.",
    ],
  },
  {
    slug: "intervux",
    name: "Intervux",
    tagline: "An interview platform for live technical hiring end-to-end.",
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Clerk", "Stream", "LangChain", "Groq", "JDoodle"],
    link: { label: "Live link", href: "https://intervux.vercel.app/" },
    points: [
      "Built an interview platform supporting concurrent video interviews, collaborative code execution, AI evaluation, and recruiter workflows for technical hiring.",
      "Engineered a scalable backend with the Next.js App Router, Prisma ORM, Neon PostgreSQL, and Clerk authentication, in a type-safe relational architecture.",
      "Integrated Stream Video/Chat, Groq LLM, JDoodle code execution, and automated workflows to enable live technical interviews, AI feedback, and asynchronous notifications.",
    ],
  },
];

export const skills = [
  { label: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript"] },
  { label: "Web", items: ["React.js", "Next.js", "Node.js", "Express.js"] },
  { label: "Cloud & DevOps", items: ["Linux", "Docker"] },
  { label: "AI / LLM", items: ["LangChain", "LangGraph", "RAG"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "Jupyter Notebook"] },
];

// Real competitive-programming ratings, used as the site's signature visual —
// tier colors match each platform's own rating-color convention.
export type RatingEntry = {
  platform: string;
  handle: string;
  handleHref: string;
  tier: string;
  rating: number;
  max: number; // scale ceiling used to size the bar, per-platform
  color: string;
};

export const ratings: RatingEntry[] = [
  {
    platform: "LeetCode",
    handle: "gaurangagarwal26",
    handleHref: "https://leetcode.com/u/gaurangagarwal26/",
    tier: "Knight",
    rating: 2091,
    max: 2200,
    color: "#F6B93B",
  },
  {
    platform: "Codeforces",
    handle: "gaurangagarwal26",
    handleHref: "https://codeforces.com/profile/gaurangagarwal26",
    tier: "Pupil",
    rating: 1302,
    max: 1400,
    color: "#3FA34D",
  },
  {
    platform: "CodeChef",
    handle: "gaurangag",
    handleHref: "https://www.codechef.com/users/gaurangag",
    tier: "3★",
    rating: 1654,
    max: 1800,
    color: "#5B7CD8",
  },
];

export const achievements = [
  {
    title: "AIR 420 — ICPC Prelims 2025",
    detail:
      "Qualified for the Amritapuri & Kanpur Regional Contests; placed Rank 77 at the Kanpur Onsite Regional.",
  },
  {
    title: "LeetCode — Knight",
    detail: "Maximum rating 2091; top 1.69%.",
  },
  {
    title: "LeetCode Weekly Contest 512",
    detail: "Global Rank 532.",
    href: "https://leetcode.com/contest/weekly-contest-512/",
  },
  {
    title: "LeetCode Weekly Contest 478",
    detail: "Global Rank 779.",
    href: "https://leetcode.com/contest/weekly-contest-478/",
  },
  {
    title: "CodeChef Starters 202",
    detail: "Global Rank 69.",
    href: "https://www.codechef.com/START202C",
  },
  {
    title: "CodeChef Starters 171",
    detail: "Global Rank 218.",
    href: "https://www.codechef.com/START171C",
  },
];
