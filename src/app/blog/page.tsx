import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Sourov",
  description:
    "Technical deep-dives on JavaScript, TypeScript, Python automation, and building resilient product platforms.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
      <SectionHeading eyebrow="Writing" title="Long-form engineering notes" />
      <p className="mt-4 text-lg text-slate-300">
        I share real-world lessons from platform leadership, API design, and
        front-end architecture. Every article ships with actionable takeaways
        you can apply to your own stack.
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
