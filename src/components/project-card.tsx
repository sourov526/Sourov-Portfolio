import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/40">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <ArrowUpRight className="h-5 w-5 text-sky-300 transition group-hover:text-sky-400" />
      </div>
      <p className="mt-3 text-base text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        prefetch={false}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
      >
        View case study
      </Link>
    </li>
  );
}
