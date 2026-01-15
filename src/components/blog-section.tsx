import { BlogMeta } from "@/lib/blog";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";
import { BlogCard } from "./blog-card";
import { SectionHeading } from "./section-heading";

type BlogSectionProps = {
  posts: BlogMeta[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <AnimatedSection
      id="blog"
      delay={0.25}
      className="relative overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-6">
        <SectionHeading title="Blogs" className="text-center" />
        <Link
          href="/blog"
          className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 md:absolute md:bottom-0 md:right-0"
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
