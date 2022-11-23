export type BlogPageProps = { title: string; layout: string; postDate: string; content: string; filename: string };

export type BlogPostParams = { params: { blogPost: string } };

export type BlogPostProps = {
  frontMatter: Omit<BlogPageProps, "content">;
  html: any;
};
