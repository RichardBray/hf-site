import Image from "next/image";
import { ShowcaseData } from "../Showcase";
import Targets from "./Targets";

export default function Card(props: { data: ShowcaseData }) {
  const { data } = props;
  return (
    <>
      <h3>{data.title}</h3>
      <a href={data.website} rel="noopener noreferrer" target="_blank">
        <Image width="500" height="260" src={`/images/showcase/${data.title!}.png`} alt={data.title!} />
      </a>
      <Targets data={data} />
    </>
  );
}
