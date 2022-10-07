import { join } from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export function getParsedFileContent(fileName: string, filePath: string) {
  const markdownFilePath = join(filePath, `${fileName}.html.md`);
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
