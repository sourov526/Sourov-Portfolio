import Link from "next/link";
import { Calendar } from "lucide-react";
import { BlogMeta } from "@/lib/blog";

type BlogCardProps = {
  post: BlogMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-emerald-900/30 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-emerald-400/30">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <Link href={`/blog/${post.slug}`} className="relative block space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date} className="text-slate-200">
            {new Intl.DateTimeFormat("en", {
              dateStyle: "medium",
            }).format(new Date(post.date))}
          </time>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white drop-shadow-sm">
            {post.title}
          </h3>
          <p className="mt-2 text-base text-slate-200">{post.excerpt}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-inset ring-white/15"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition group-hover:text-emerald-100">
          Read the article →
        </p>
      </Link>
    </li>
  );
}
