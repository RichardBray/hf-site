export type ShowcasePagesProps = {
    showcaseFiles: Array<ShowcaseData>;
  };

  export interface ShowcaseData extends Partial<ShowcaseTargets> {
    layout: string;
    title: string;
    featured?: boolean;
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