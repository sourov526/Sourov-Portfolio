export type SkillCategory = {
  title: string;
  summary: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Craft",
    summary:
      "UI engineering across React, Next.js, and Vue with production-grade design systems.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-End & APIs",
    summary:
      "Typed Node services, Python frameworks, and relational databases powering full-stack features.",
    items: [
      "Node.js",
      "tRPC",
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "AI & Data",
    summary:
      "RAG systems, vector stores, and ML tooling for intelligent automation and assistants.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "LLMs",
      "Vector Databases",
      "Neo4j",
      "ChromaDB",
    ],
  },
  {
    title: "Automation & Tooling",
    summary:
      "Browser automation and CI-ready bots that collect insight and keep pipelines humming.",
    items: ["Selenium", "Web Scraping", "Python Bots"],
  },
  {
    title: "DevOps & Deployment",
    summary:
      "Modern delivery workflows from containers to cloud previews with tight Git hygiene.",
    items: ["Docker", "Git", "GitHub", "Bitbucket", "Vercel"],
  },
  {
    title: "Ops & Collaboration",
    summary:
      "Effective communication, planning, and delivery rituals with distributed teams.",
    items: ["Jira", "Confluence", "Windows", "Ubuntu", "English Communication"],
  },
];
