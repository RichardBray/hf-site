import Image from "next/image";

import { getAllFilesInFolder } from "services/fileService";
import { getParsedFileContent } from "services/markdownService";
import { FILE_PATHS } from "constants";

type ShowcasePagesProps = {
  showcaseFiles: any[];
};

function Showcase({ showcaseFiles }: ShowcasePagesProps): JSX.Element {
  console.log(showcaseFiles, "showcaseFiles");
  return (
    <>
      <div className="container container-main">
        <h1 className="title">Showcase</h1>
        <iframe
          width="180px"
          scrolling="0"
          height="30px"
          frameBorder="0"
          className="githubBtn-tr-info"
          src="https://ghbtns.com/github-btn.html?user=haxeflixel&amp;repo=haxeflixel.com&amp;type=watch&amp;count=true&amp;size=large"
        ></iframe>

        <div className="center-align-a">
          {showcaseFiles.map((showcaseFile, idx) => (
            <>
            <h3>{showcaseFile.title}</h3>
            <a key={idx} href={showcaseFile.website} rel="noopener noreferrer">
              Images goes here
            </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const showcaseFiles = await getAllFilesInFolder(FILE_PATHS.showcase);
  const showcaseFilesFrontMatter = showcaseFiles.map(showcaseFile => {
    const { frontMatter } = getParsedFileContent(showcaseFile, FILE_PATHS.showcase, ".md");
    return frontMatter;
  })

  console.log(showcaseFilesFrontMatter, "showcaseFilesFrontMatter")
  return {
    props: {
      showcaseFiles: showcaseFilesFrontMatter,
    },
  };
}

export default Showcase;
