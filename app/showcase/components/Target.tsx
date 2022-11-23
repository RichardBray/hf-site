import Image from "next/image";

export default function Target(props: { target: string; title: string; format: string }) {
  const imageNames: Record<string, string> = {
    windows: "windows",
    linux: "linux",
    mac: "apple",
    android: "android",
    ios: "ios",
    flash: "flash",
    steam: "steam",
    ps4: "ps",
    psvita: "ps",
    xbox: "xbox",
  };

  const imageDimensions: Record<string, Record<string, number>> = {
    windows: {
      width: 30,
      height: 40,
    },
    linux: {
      width: 40,
      height: 49,
    },
    mac: {
      width: 26,
      height: 40,
    },
    flash: {
      width: 32,
      height: 40,
    },
    ios: {
      width: 40,
      height: 32,
    }
  };

  const imageProps = {
    width: imageDimensions[props.format]?.width ?? 40,
    height: imageDimensions[props.format]?.height ?? 40,
    src: `/images/targets/${imageNames[props.format]}-logo.${props.format === "ios" ? "png" : "svg"}`,
    alt: props.title!,
  };

  if (props.target) {
    return (
      <a href={props.target} rel="noopener noreferrer" target="_blank">
        <Image {...imageProps} />
      </a>
    );
  }

  return <Image {...imageProps} />;
}
