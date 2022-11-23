export type DemoFiles = {
  demoFiles: string[];
};

export type DemoParams = { params: { demo: string } };

export type DemoInputProps = {
  frontMatter: Record<string, string>;
  html: any;
  prevDemo: string;
  nextDemo: string;
};
