export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
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
    items: [
      "Node.js",
      "tRPC",
      "Python",
      "FastAPI",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "RAG",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "Vector Databases",
      "Neo4j",
      "ChromaDB",
      "LangChain",
      "Pandas",
    ],
  },
  {
    title: "Automation & Tooling",
    items: ["Selenium", "Web Scraping", "Python Bots"],
  },
  {
    title: "DevOps & Deployment",
    items: ["Docker", "Git", "GitHub", "Bitbucket", "Vercel"],
  },
  {
    title: "Ops & Collaboration",
    items: [
      "Jira",
      "Confluence",
      "Windows",
      "Ubuntu",
      "Mac",
      "English & Bangla Communication",
    ],
  },
];
