
import { getAllFilesInFolder } from "services/fileService";
import { FILE_PATHS } from "../../constants";

import DemoPage from './DemoPage';

export default async function Index() {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);

  return <DemoPage demoFiles={demoFiles} />
}
