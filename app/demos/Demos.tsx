import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import type { DemoFiles } from "./types";

export default function Demos({ demoFiles }: DemoFiles) {
  return (
    <>
      <div className="container container-main">
        <h1 className="title">Demos</h1>
        <iframe
          width="180px"
          scrolling="0"
          height="30px"
          frameBorder="0"
          className="githubBtn-tr-info"
          src="https://ghbtns.com/github-btn.html?user=haxeflixel&amp;repo=flixel-demos&amp;type=watch&amp;count=true&amp;size=large"
        />
        <section className="center-align-a">
          {demoFiles.map((demoFile, idx) => (
            <Link key={idx} href={`/demos/${demoFile}`}>
              <p className={styles["demo-section-title"]}>{demoFile}</p>
              <Image
                className={styles["demo-section-img"]}
                src={`/images/demos/${demoFile}.png`}
                width="190"
                height="190"
                alt={demoFile}
              />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
