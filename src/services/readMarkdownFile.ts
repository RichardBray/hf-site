import { join } from "node:path";
import fs from "node:fs";
import matter from "gray-matter";


function getFileNames(postPath: string, fileName: string) {
    // const pagesDirectory = join(process.cwd(), '_snippets')
    // const fullPath = join(dir, `${realSlug}.md`)

    const markdownFilePath = join(postPath, `${fileName}.md`);
    const fileContent = fs.readFileSync(markdownFilePath, "utf8");

    const {data, content} = matter(fileContent);

    return {
        frontMatter: data,
        content,
    }
}