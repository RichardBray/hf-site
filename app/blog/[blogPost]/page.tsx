import { getAllFilesInFolder } from "services/fileService";
import { getParsedFileContent, serialiseMarkdownContent } from "services/markdownService";

import { FILE_PATHS } from "$app/constants";
import { BlogPostParams, BlogPostProps } from "../types";
import BlogPost from "./BlogPost";

export async function generateStaticParams() {
  const blogPostFiles = await getAllFilesInFolder(FILE_PATHS.blog);
  return blogPostFiles.map((blogPost) => ({ blogPost }));
}

async function getBlogPostProps({ params }: BlogPostParams) {
  try {
    const selectedBlogPost = params.blogPost;

    const { frontMatter, content } = getParsedFileContent(selectedBlogPost, FILE_PATHS.blog);
    const renderedHTML = await serialiseMarkdownContent(content);

    return {
      frontMatter,
      html: renderedHTML,
    };
  } catch (error) {
    console.error(`demo getStaticPaths Error: ${(error as Error).message}`);
  }
}

export default async function Index(params: BlogPostParams) {
  const props = await getBlogPostProps(params) as BlogPostProps;

  return <BlogPost frontMatter={props?.frontMatter} html={props?.html} />;
}
