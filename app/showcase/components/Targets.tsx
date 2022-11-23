import { formatTargetData } from "$services/dataService";
import type { ShowcaseData } from "../types";
import Target from "./Target";

import styles from "../styles.module.css";

export default function Targets(props: { data: ShowcaseData }) {
  const targets = formatTargetData(props.data);

  return (
    <>
      {targets.map((target, idx) => (
        <span key={idx} className={target.url ? styles["showcase-target-active"] : styles["showcase-target"]}>
          <Target target={target.url ?? ""} title={target.title} format={target.format!} />
        </span>
      ))}
    </>
  );
}
