import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { getAllBlogPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllBlogPosts();
  return (
    <>
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection posts={posts.slice(0, 4)} />
      <ContactSection />
    </>
  );
}
