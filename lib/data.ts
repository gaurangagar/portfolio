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
    slug: "intervux",
    name: "Intervux",
    tagline: "An interview platform for live technical hiring end-to-end.",
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Clerk", "Stream", "LangChain + Groq", "JDoodle"],
    link: { label: "Live link", href: "https://intervux.vercel.app/" },
    featured: true,
    points: [
      "Built an interview platform supporting concurrent video interviews, collaborative code execution, AI evaluation, and recruiter workflows for technical hiring.",
      "Engineered a scalable backend with the Next.js App Router, Prisma ORM, Neon PostgreSQL, and Clerk authentication, in a type-safe relational architecture.",
      "Integrated Stream video/chat, Groq LLM, and JDoodle code execution to enable live technical interviews, AI feedback, and asynchronous notifications.",
    ],
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    tagline: "RAG-powered resume screening that scores candidate fit in under 500ms.",
    stack: ["MERN", "LangChain", "Groq LLM", "Xenova Transformers"],
    link: { label: "GitHub", href: "https://github.com/gaurangagar/AI-Resume-Analyzer" },
    featured: true,
    points: [
      "Built an AI resume-screening application that automatically matches candidate resumes against job requirements, cutting manual screening time — users upload PDFs and get a fit analysis in under 500ms.",
      "Engineered a RAG pipeline with Xenova embeddings, 500-character semantic chunking, and cosine-similarity retrieval, reaching 70%+ resume-to-job accuracy for intelligent resume scoring.",
      "Built a scalable backend with structured outputs — REST APIs parsing 5MB PDFs, with Zod schema validation across 5+ ATS data points.",
    ],
  },
  {
    slug: "feedloop",
    name: "Feedloop",
    tagline: "AI-generated feedback forms with summarized insights, delivered by email.",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth.js", "Google GenAI"],
    link: { label: "Live link", href: "https://feedloop-rho.vercel.app/" },
    points: [
      "Built a full-stack platform enabling businesses to generate AI-powered feedback forms, distribute them to customers, and receive AI-summarized response insights via email.",
      "Automated the end-to-end workflow from order upload to form generation to email distribution, removing manual steps from customer feedback collection.",
      "Designed a responsive, intuitive interface that streamlined how teams manage and analyze feedback at scale.",
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
    rating: 2005,
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
    rating: 1627,
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
    title: "LeetCode Weekly Contest 478",
    detail: "Global Rank 779.",
  },
  {
    title: "LeetCode Biweekly Contest 186",
    detail: "Global Rank 732.",
  },
  {
    title: "CodeChef Starters 202",
    detail: "Global Rank 69.",
  },
  {
    title: "CodeChef Starters 171",
    detail: "Global Rank 218.",
  },
];
