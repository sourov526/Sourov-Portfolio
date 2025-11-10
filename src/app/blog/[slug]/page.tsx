import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPost(slug).catch(() => null);
  if (!post) {
    return {};
  }

  return {
    title: `${post.meta.title} | Writing`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getBlogPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all articles
      </Link>
      {meta.tags.length > 0 && (
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-emerald-300">
          {meta.tags.join(" • ")}
        </p>
      )}
      <h1 className="mt-3 text-4xl font-semibold text-white">{meta.title}</h1>
      <time className="mt-2 block text-sm text-slate-400" dateTime={meta.date}>
        {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
          new Date(meta.date),
        )}
      </time>
      <div
        className="blog-content mt-10 space-y-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
