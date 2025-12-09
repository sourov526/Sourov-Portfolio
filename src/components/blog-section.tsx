import Link from "next/link";
import { BlogMeta } from "@/lib/blog";
import { AnimatedSection } from "./animated-section";
import { BlogCard } from "./blog-card";
import { SectionHeading } from "./section-heading";

type BlogSectionProps = {
  posts: BlogMeta[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <AnimatedSection id="blog" delay={0.25} className="relative overflow-hidden bg-transparent">
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading title="Blog" />
        <Link
          href="/blog"
          className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
        >
          View all articles →
        </Link>
      </div>
      {posts.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-base text-slate-400">
          Blog posts are on the way—check back soon for fresh engineering notes.
        </p>
      )}
    </AnimatedSection>
  );
}
