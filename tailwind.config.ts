import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F4",
        ink: "#14171A",
        muted: "#6B6F76",
        line: "#E4E3DD",
        signal: "#03948A",       // signature accent — CF "specialist" cyan-teal
        signalDeep: "#026F67",
        flame: "#E0692B",        // secondary accent — CP "expert" orange, used sparingly
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
