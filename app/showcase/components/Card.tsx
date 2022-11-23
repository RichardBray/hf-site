import Image from "next/image";
import type { ShowcaseData } from "../types";
import Targets from "./Targets";

import styles from "../styles.module.css";

export default function Card(props: { data: ShowcaseData }) {
  const { data } = props;
  const featuredThumbnail = {
    width: 500,
    height: 260,
  };
  const notFeaturedThumbnail = {
    width: 345,
    height: 184,
  };
  const imageDimensions = [notFeaturedThumbnail, featuredThumbnail] as const;

  return (
    <>
      <h3>{data.title}</h3>
      <a href={data.website} className={styles["showcase-game-thumbnail"]} rel="noopener noreferrer" target="_blank">
        <Image
          width={imageDimensions[Number(data.featured ?? 0)].width}
          height={imageDimensions[Number(data.featured ?? 0)].height}
          src={`/images/showcase/${data.title!}.png`}
          alt={data.title!}
        />
      </a>
      <div className={styles["showcase-targets"]}>
        <Targets data={data} />
      </div>
    </>
  );
}
