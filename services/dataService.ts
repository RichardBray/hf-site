import { ShowcaseData } from "$app/showcase/types";

type AllTargets = ["windows", "linux", "mac", "android", "ios", "flash", "steam", "ps4"?, "psvita"?, "xbox"?];
type UnnecessaryKeys = ["layout", "title", "featured"];
type OptionalTargets = ["ps4", "psvita", "xbox"];

export function formatTargetData(data: ShowcaseData) {
  const tempData = { ...data };
  const unnecessaryKeys: UnnecessaryKeys = ["layout", "title", "featured"];
  const targets: AllTargets = ["windows", "linux", "mac", "android", "ios", "flash", "steam"];
  const optionalTargets: OptionalTargets = ["ps4", "psvita", "xbox"];

  unnecessaryKeys.forEach((key) => {
    delete tempData[key];
  });

  optionalTargets.forEach((optionalTarget) => {
    if (Object.keys(tempData).includes(optionalTarget)) {
      targets.push(optionalTarget);
    }
  });

  return targets.map((target) => ({
    format: target,
    url: tempData[target!] ?? null,
    title: data.title,
  }));
}
