export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  focus: string[];
  impact: string[];
};

export const experiences: Experience[] = [
  {
    company: "Brand Cloud Inc. (Japan-based)",
    role: "Software Engineer (Full Stack)",
    location: "Dhaka, Bangladesh · Remote collaboration",
    start: "Jun 2023",
    end: "Present",
    focus: [
      "Automation sector",
      "AI/RAG initiatives",
      "Full-stack web platform",
    ],
    impact: [
      "Owns Jira tickets end-to-end, communicating progress daily and defending timelines.",
      "Builds Python automation bots that ingest partner data, verify outputs across S3 and DynamoDB, and self-heal failures through targeted debugging.",
      "Designed a ChatGPT-inspired Retrieval-Augmented Generation system using LLMs, ChromaDB, and Neo4j to deliver contextual answers to enterprise users.",
      "Implements full-stack RAG applications with React/Next.js, Tailwind, and TypeScript on the front end plus tRPC, Prisma, PostgreSQL, and vector stores on the backend.",
    ],
  },
  {
    company: "Confidence Group (Stardust Telecom Ltd.)",
    role: "DevOps Developer Intern",
    location: "Banani, Dhaka",
    start: "Nov 2022",
    end: "Apr 2023",
    focus: ["CRM delivery", "DevOps enablement", "Cross-team collaboration"],
    impact: [
      "Implemented CRM features across Vue.js front ends and Django REST APIs while pairing with QA to keep regressions low.",
      "Containerized services with Docker and kept Git workflows healthy for the DevOps squad.",
      "Partnered closely with developers, QA engineers, and project managers to triage issues and ship increments on schedule.",
    ],
  },
];
