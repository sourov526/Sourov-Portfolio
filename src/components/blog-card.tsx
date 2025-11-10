import Link from "next/link";
import { Calendar } from "lucide-react";
import { BlogMeta } from "@/lib/blog";

type BlogCardProps = {
  post: BlogMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500/5">
      <Link href={`/blog/${post.slug}`} className="block space-y-4">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Calendar className="h-4 w-4 text-emerald-300" />
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat("en", {
              dateStyle: "medium",
            }).format(new Date(post.date))}
          </time>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{post.title}</h3>
          <p className="mt-2 text-base text-slate-300">{post.excerpt}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold text-emerald-300">
          Read the article →
        </p>
      </Link>
    </li>
  );
}
