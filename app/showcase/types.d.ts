export type ShowcasePagesProps = {
  showcaseFiles: SortedShowcaseFiles;
};

export interface ShowcaseData extends Partial<ShowcaseTargets> {
  layout: string;
  title: string;
  featured?: boolean;
}

export type SortedShowcaseFiles = {
  featured: ShowcaseData[];
  notFeatured: ShowcaseData[];
};

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
