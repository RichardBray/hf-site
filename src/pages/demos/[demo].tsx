import { MDXRemote } from "next-mdx-remote";
import Image from "next/future/image";

import { getAllFilesInFolder } from "$services/fileService";
import { getParsedFileContent, markdownToHTML } from "$services/markdownService";

import { FILE_PATHS } from "src/constants";

import styles from "$pages/demos/demos.module.css";

type DemoInputProps = {
  frontMatter: Record<string, string>;
  html: any;
  prevDemo: string;
  nextDemo: string;
};
export default function Demo({ frontMatter, html, prevDemo, nextDemo }: DemoInputProps): JSX.Element {
  return (
    <div className="container container-main">
      <div style={{ marginTop: "5rem" }}>
        {frontMatter?.targets?.includes("html5") ? (
          <iframe
            className={styles["html5-demo"]}
            src={`https://demos.haxeflixel.com/html5/${frontMatter.title}`}
            width={frontMatter.width ?? 640}
            height={frontMatter.height ?? 480}
          />
        ) : (
          <div className={styles["flash-warning"]}>
            <p>Sorry, this demo requires the Flash Player.</p>
            <p>Flash is not supported in modern browsers</p>
          </div>
        )}
      </div>
      <div className="container-main-content">
        <div className="demo-content">
          <h1 className="title" style={{marginTop: "3rem"}}>{frontMatter.title}</h1>
          <a
            href={`https://github.com/HaxeFlixel/flixel-demos/tree/master/${frontMatter.title}/source`}
            target="_blank"
            rel="noreferrer"
            style={{ float: "right" }}
          >
            <span className="glyphicon glyphicon-book" />
            {" "}source code
          </a>

          <MDXRemote {...html} />
          <hr />

          <ul className="pager">
            <li className="previous">
              <a href={`/demos/${prevDemo}`} title="Previous">
                {"< "}
                <Image src={`/images/demos/${prevDemo}.png`} width="70" height="70" alt="Previous" />
              </a>
            </li>
            <li className="next">
              <a href={`/demos/${prevDemo}`} title="Next">
                <Image src={`/images/demos/${nextDemo}.png`} width="70" height="70" alt="Next" />
                {" >"}
              </a>
            </li>
          </ul>
        </div>
      </div>
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

export async function getStaticProps({ params }: { params: { demo: string; prevDemo: string; nextDemo: string } }) {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);
  const currentDemoIndex = demoFiles.indexOf(params.demo);
  const lastDemo = demoFiles[demoFiles.length - 1];
  const firstDemo = demoFiles[0];
  const prevDemo = currentDemoIndex === 0 ? lastDemo : demoFiles[currentDemoIndex - 1];
  const nextDemo = currentDemoIndex === demoFiles.length - 1 ? firstDemo : demoFiles[currentDemoIndex + 1];

  const { frontMatter, content } = getParsedFileContent(params.demo, FILE_PATHS.demos);
  const renderedHTML = await markdownToHTML(content);

  return {
    props: {
      frontMatter,
      html: renderedHTML,
      prevDemo: String(prevDemo),
      nextDemo: String(nextDemo),
    },
  };
}
