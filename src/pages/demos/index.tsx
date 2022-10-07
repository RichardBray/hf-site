import Link from "next/link";
import Image from "next/future/image";

import styles from "$pages/demos/demos.module.css";
import {getAllFilesInFolder} from "$services/fileService";
import { FILE_PATHS } from "src/constants";

import type { NextPage } from "next";

type DemoPageProps = {
  demoFiles: string[];
};

const Demos: NextPage<DemoPageProps> = ({ demoFiles }) => (
  <>
    <div className="container container-main">
      <h1 className="title">Demos</h1>
      <iframe
        width="180px"
        scrolling="0"
        height="30px"
        frameBorder="0"
        id="githubBtn-tr-info"
        className={styles["githubBtn-tr-info"]}
        src="https://ghbtns.com/github-btn.html?user=haxeflixel&amp;repo=flixel-demos&amp;type=watch&amp;count=true&amp;size=large"
      />
      <section className="center-align-a">
        {demoFiles.map((demoFile, idx) => (
          <Link key={idx} href={`/demos/${demoFile}`}>
            <a>
              <p className={styles["demo-section-title"]}>{demoFile}</p>
              <Image
                className={styles["demo-section-img"]}
                src={`/images/demos/${demoFile}.png`}
                width="190"
                height="190"
                alt={demoFile}
              />
            </a>
          </Link>
        ))}
      </section>
    </div>
  </>
);

export async function getStaticProps() {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);

  return {
    props: {
      demoFiles,
    },
  };
}

export default Demos;
