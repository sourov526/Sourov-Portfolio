export type Project = {
  name: string;
  description: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "AI Release Copilot",
    description:
      "A workflow automation platform that reviews pull requests, runs quality gates, and promotes releases with a single chat-style interface.",
    techStack: ["Next.js", "tRPC", "PostgreSQL", "LangChain"],
    link: "https://github.com/sourov/release-copilot",
  },
  {
    name: "Realtime Analytics Hub",
    description:
      "Multi-tenant dashboard that streams IoT metrics from edge devices and delivers millisecond visualizations for operations teams.",
    techStack: ["TypeScript", "WebSockets", "ClickHouse", "TailwindCSS"],
    link: "https://github.com/sourov/realtime-analytics",
  },
  {
    name: "Developer Insights Blog",
    description:
      "A markdown-powered knowledge hub packed with deep dives on React, TypeScript, and cloud-native patterns.",
    techStack: ["Next.js", "MDX", "Framer Motion", "Vercel"],
    link: "https://github.com/sourov/dev-insights",
  },
];
