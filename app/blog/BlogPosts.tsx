import Link from "next/link";
import { BlogPageProps } from "./types";
import TwitterTimeline from "./components/TwitterTimeline"
import styles from "./styles.module.css";

export default function Blog({ blogFiles }: { blogFiles: BlogPageProps[] }): JSX.Element {
  return (
    <>
      <div className="container container-main">
        <div className="col-md-8">
          <h1 className="title">Blog</h1>
          {blogFiles.map((data) => (
            <>
              <Link href={`/blog/${data.title}`}>
                <h3>{data.title}</h3>
              </Link>
              <div className={`${styles["post-date"]} ${styles["post-date-preview"]}`}>{data.postDate}</div>
              <p>
                {data.content} <Link href={`/blog/${data.title}`}> read more</Link>
              </p>
              <hr />
            </>
          ))}
        </div>
        <div className={`col-md-4 ${styles["twitter-widget"]}`}>
          <TwitterTimeline />
        </div>
      </div>
    </>
  );
}
