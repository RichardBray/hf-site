import Card from "./components/Card";

import styles from "./styles.module.css";
import type * as Types from "./types";

export default function Showcase({ showcaseFiles }: Types.ShowcasePagesProps): JSX.Element {
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
          <div className={`row ${styles["showcase-grid"]}`}>
            {showcaseFiles.featured.map((showcaseFile, idx) => (
              <div key={idx} className={`col-md-6 ${styles["showcase-game"]}`}>
                <Card data={showcaseFile} />
              </div>
            ))}
          </div>
          <div className={`row ${styles["showcase-grid"]}`}>
            {showcaseFiles.notFeatured.map((showcaseFile, idx) => (
              <div key={idx} className={`col-md-4 ${styles["showcase-game"]}`}>
                <Card data={showcaseFile} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
