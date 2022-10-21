import { join } from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export function getParsedFileContent(fileName: string, filePath: string, fileExtension: string = ".html.md") {
  const markdownFilePath = join(filePath, `${fileName}${fileExtension}`);
  const fileContent = fs.readFileSync(markdownFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
}

export async function markdownToHTML(markdownContent: string) {
  return await serialize(markdownContent ?? "");
}
