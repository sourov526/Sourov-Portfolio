import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogMeta = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
};

export async function getBlogPost(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  const source = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const processed = await remark().use(html).process(content);

  return {
    meta: {
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? new Date().toISOString(),
      tags: data.tags ?? [],
      slug,
    },
    content: processed.toString(),
  };
}

export async function getAllBlogPosts(): Promise<BlogMeta[]> {
  const entries = await fs.promises.readdir(blogDirectory);
  const posts = await Promise.all(
    entries
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const filePath = path.join(blogDirectory, file);
        const source = await fs.promises.readFile(filePath, "utf8");
        const { data } = matter(source);
        return {
          title: data.title ?? slug,
          excerpt: data.excerpt ?? "",
          date: data.date ?? new Date().toISOString(),
          tags: data.tags ?? [],
          slug,
        } as BlogMeta;
      }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
