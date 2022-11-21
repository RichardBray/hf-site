import { formatTargetData } from "$services/dataService";
import { ShowcaseData } from "../Showcase";
import Target from "./Target";

import styles from "../showcase.module.css";

export default function Targets(props: { data: ShowcaseData }) {
  const targets = formatTargetData(props.data);

  return (
    <>
      {targets.map((target, idx) => (
        <span key={idx} className={target.url ? styles["showcase-targets-active"] : styles["showcase-targets"]}>
          <Target target={target.url ?? ""} title={target.title} format={target.format!} />
        </span>
      ))}
    </>
  );
}
