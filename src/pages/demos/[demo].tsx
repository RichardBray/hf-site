import { MDXRemote } from "next-mdx-remote";

import { getAllFilesInFolder } from "$services/fileService";
import { getParsedFileContent, markdownToHTML } from "$services/markdownService";

import { FILE_PATHS } from "src/constants";

export default function Demo({ frontMatter, html }: any) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...html} />
    </div>
  );
}

export async function getStaticPaths() {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);

  const paths = demoFiles.map((demo) => ({
    params: { demo },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { demo: string } }) {
  const { frontMatter, content } = getParsedFileContent(params.demo, FILE_PATHS.demos);
const renderedHTML = await markdownToHTML(content);

  return { props: { frontMatter, html: renderedHTML } };
}
