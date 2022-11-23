'use client';

import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

import styles from "$app/demos/styles.module.css";

import type { DemoInputProps } from "../types";

export default function Demo({ frontMatter, html, prevDemo, nextDemo }: Partial<DemoInputProps>): JSX.Element {
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
          <h1 className="title" style={{ marginTop: "3rem" }}>
            {frontMatter?.title}
          </h1>
          <a
            href={`https://github.com/HaxeFlixel/flixel-demos/tree/master/${frontMatter?.title}/source`}
            target="_blank"
            rel="noreferrer"
            style={{ float: "right" }}
          >
            <span className="glyphicon glyphicon-book" /> source code
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
