import Card from "./components/Card";

import styles from "./showcase.module.css";

export type ShowcasePagesProps = {
  showcaseFiles: Array<ShowcaseData>;
};

export interface ShowcaseData extends Partial<ShowcaseTargets> {
  layout: string;
  title: string;
  featured: boolean;
}

type ShowcaseTargets = {
  windows: string;
  mac: string;
  linux: string;
  flash: string;
  android: string;
  website: string;
  steam: string;
  psvita: string;
  ios: string;
  ps4: string;
  xbox: string;
};

export default function Showcase({ showcaseFiles }: ShowcasePagesProps): JSX.Element {
  const sortedGames = showcaseFiles.reduce(
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
    } as {
      featured: ShowcaseData[];
      notFeatured: ShowcaseData[];
    }
  );

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
            <div className={`col-md-4 ${styles["showcase-game"]}`}>
              {sortedGames.featured.map((showcaseFile, idx) => (
                <Card key={idx} data={showcaseFile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
