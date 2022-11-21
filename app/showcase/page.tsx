import { getAllFilesInFolder } from "services/fileService";
import { getParsedFileContent } from "services/markdownService";
import { FILE_PATHS } from "../constants";
import type { ShowcasePagesProps } from "./Showcase";
import Showcase from "./Showcase";

export async function getShowcaseProps() {
  const showcaseFiles = await getAllFilesInFolder(FILE_PATHS.showcase);
  const showcaseFilesFrontMatter = showcaseFiles.map((showcaseFile) => {
    const { frontMatter } = getParsedFileContent(showcaseFile, FILE_PATHS.showcase, ".md");
    return frontMatter;
  });

  return {
    showcaseFiles: showcaseFilesFrontMatter,
  };
}

export default async function Index() {
  const props = (await getShowcaseProps()) as ShowcasePagesProps;

  return <Showcase showcaseFiles={props.showcaseFiles} />;
}
