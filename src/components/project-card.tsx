import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const gradientClasses = [
  "from-emerald-400 via-emerald-300 to-teal-400",
  "from-sky-400 via-cyan-400 to-blue-500",
  "from-amber-400 via-yellow-400 to-orange-400",
  "from-indigo-400 via-blue-500 to-sky-400",
  "from-rose-400 via-pink-400 to-red-400",
];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = gradientClasses[index % gradientClasses.length];

  return (
    <li className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-sky-900/30 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-sky-500/30">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white drop-shadow-sm">
            {project.name}
          </h3>
          <p className="mt-2 text-base text-slate-200">
            {project.description}
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 text-sky-200 transition group-hover:text-sky-100" />
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-50 ring-1 ring-inset ring-white/15 shadow-sm shadow-sky-900/40 backdrop-blur transition group-hover:ring-sky-300/60"
          >
            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        prefetch={false}
        className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-sky-100"
      >
        View project
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </li>
  );
}
