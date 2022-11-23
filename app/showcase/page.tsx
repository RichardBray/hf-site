import { getAllFilesInFolder } from "services/fileService";
import { getParsedFileContent } from "services/markdownService";
import { FILE_PATHS } from "../constants";
import type { SortedShowcaseFiles, ShowcasePagesProps} from "./types";
import Showcase from "./Showcase";

export async function getShowcaseProps() {
  const showcaseFiles = await getAllFilesInFolder(FILE_PATHS.showcase);
  const alphabeticalOrder = (a: string, b: string) => a.localeCompare(b);
  showcaseFiles.sort(alphabeticalOrder);

  const showcaseFilesFrontMatter = showcaseFiles.map((showcaseFile) => {
    const { frontMatter } = getParsedFileContent(showcaseFile, FILE_PATHS.showcase, ".md");
    return frontMatter;
  });

  const sortedGames = showcaseFilesFrontMatter.reduce(
    (accumulator, currentValue) => {
      const featured = accumulator.featured;
      const notFeatured = accumulator.notFeatured;
      currentValue.featured ? featured.push(currentValue) : notFeatured.push(currentValue);
      return {
        featured,
        notFeatured,
      };
    },
    {
      featured: [],
      notFeatured: [],
    } as SortedShowcaseFiles
  );

  return {
    showcaseFiles: sortedGames,
  };
}

export default async function Index() {
  const props = (await getShowcaseProps()) as ShowcasePagesProps;

  return <Showcase showcaseFiles={props.showcaseFiles} />;
}
