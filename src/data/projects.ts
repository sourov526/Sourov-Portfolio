export type Project = {
  name: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    name: "Raggie (RAG-Based Web Application)",
    description:
      "Built and maintained a full-stack RAG web application with retrieval-based AI features for interactive, intelligent user workflows.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "PostgreSQL",
      "Prisma Studio",
      "ChromaDB",
      "Docker",
      "AWS",
    ],
  },
  {
    name: "BC-Corporate CMS",
    description:
      "Built a multilingual CMS and admin platform for content, media, recruitment, and publishing workflows with SEO and role-based controls.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "tRPC", "Cloudflare", "Shell", "Git"],
  },
  {
    name: "Hobe Energy",
    description:
      "Built a multilingual CMS and admin platform for Hobe Energy with content/media/recruitment workflows, publishing controls, and Cloudflare-based deployment pipelines.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "tRPC", "Cloudflare", "Shell", "Git"],
  },
  {
    name: "MiME CONNECT",
    description:
      "Implemented CRM features across Vue.js front ends and Django REST APIs, containerized services with Docker, and partnered with QA and project teams to ship stable increments.",
    techStack: ["Vue.js", "Django REST Framework", "JavaScript", "Python", "Docker", "AWS", "Git"],
  },
  {
    name: "Competitors Ads Analysis AI",
    description:
      "Built an AI-assisted analytics platform to collect competitor ad data, classify campaigns, and surface spend trends through interactive reporting.",
    techStack: ["Python", "Node.js", "React", "Selenium", "GraphQL", "Prisma", "Pandas"],
  },
  {
    name: "Weather Application (Django)",
    description:
      "Weather forecast web app built with Django, with location-based weather lookup and clean UI presentation.",
    techStack: ["Django", "Python", "REST API", "Bootstrap"],
  },
  {
    name: "Retail Shelf Monitoring with YOLOv8",
    description:
      "Object detection system for identifying shelf talker stickers in retail shops using a YOLOv8-based computer vision pipeline.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
  },
  {
    name: "Medicinal Leaf Classification and Detection",
    description:
      "Machine learning project focused on classifying and detecting medicinal leaves from images for plant identification use cases.",
    techStack: ["Python", "Machine Learning", "TensorFlow", "OpenCV"],
  },
  {
    name: "Blog Website (Django)",
    description:
      "Content publishing platform built with Django featuring post creation, category management, and blog detail pages.",
    techStack: ["Django", "Python", "SQLite", "HTML/CSS"],
  },
];
