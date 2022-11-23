import { getAllFilesInFolder } from "services/fileService";
import { getParsedFileContent, serialiseMarkdownContent } from "services/markdownService";

import { FILE_PATHS } from "$app/constants";

import Demo from "./Demo";

import type { DemoParams } from "../types";

export async function generateStaticParams() {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);
  return demoFiles.map((demo) => ({ demo }));
}

async function getDemoProps({ params }: DemoParams) {
  try {
    const selectedDemo = params.demo;
    const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);
    const currentDemoIndex = demoFiles.indexOf(selectedDemo);
    const lastDemo = demoFiles[demoFiles.length - 1];
    const firstDemo = demoFiles[0];
    const prevDemo = currentDemoIndex === 0 ? lastDemo : demoFiles[currentDemoIndex - 1];
    const nextDemo = currentDemoIndex === demoFiles.length - 1 ? firstDemo : demoFiles[currentDemoIndex + 1];

    const { frontMatter, content } = getParsedFileContent(selectedDemo, FILE_PATHS.demos);
    const renderedHTML = await serialiseMarkdownContent(content);

    return {
      frontMatter,
      html: renderedHTML,
      prevDemo: String(prevDemo),
      nextDemo: String(nextDemo),
    };
  } catch (error) {
    console.error(`demo getStaticPaths Error: ${(error as Error).message}`);
  }
}

export default async function Index(params: DemoParams) {
  const props = await getDemoProps(params);

  return (
    <Demo frontMatter={props?.frontMatter} html={props?.html} prevDemo={props?.prevDemo} nextDemo={props?.nextDemo} />
  );
}
