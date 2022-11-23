"use client";

import { MDXRemote } from "next-mdx-remote";
import { BlogPostProps } from "../types";
import styles from "../styles.module.css";

export default function BlogPost({ frontMatter, html }: Partial<BlogPostProps>) {
  return (
    <div className="container container-main">
      <div className="col-md-8">
        <h1 className="title">{frontMatter?.title}</h1>
        <p className={styles["post-date"]}>{frontMatter?.postDate}</p>
        <MDXRemote {...html} />
        <br />
        <hr />
        <br />
      </div>
    </div>
  );
}
