import { getAllFilesInFolder } from "services/fileService";
import removeMd from "remove-markdown";
import { getParsedFileContent } from "services/markdownService";
import { FILE_PATHS } from "../constants";

import { BlogPageProps } from "./types";
import BlogPosts from "./BlogPosts";

async function getBlogProps(): Promise<{ blogFiles: BlogPageProps[] }> {
  const blogFiles = await getAllFilesInFolder(FILE_PATHS.blog);

  const blogPosts = blogFiles.map(formatPosts);

  return {
    blogFiles: blogPosts.sort(newestFirst),
  };
}

function formatPosts(blogFile: string) {
  const { frontMatter, content } = getParsedFileContent(blogFile, FILE_PATHS.blog);
  const contentString = removeMd(content);
  const characterLimit = 151;

  return { ...frontMatter, content: truncateString(contentString, characterLimit), filename: blogFile } as BlogPageProps;
}

function truncateString(str: string, limit: number) {
  return str.length > limit ? `${str.slice(0, limit)}...` : str;
}

function newestFirst(a: BlogPageProps, b: BlogPageProps) {
  return new Date(b.postDate).getTime() - new Date(a.postDate).getTime();
}

export default async function Index() {
  const props = await getBlogProps();

  return <BlogPosts blogFiles={props.blogFiles} />;
}
