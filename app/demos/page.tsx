
import { getAllFilesInFolder } from "services/fileService";
import { FILE_PATHS } from "../constants";

import Demos from './Demos';

export default async function Index() {
  const demoFiles = await getAllFilesInFolder(FILE_PATHS.demos);

  return <Demos demoFiles={demoFiles} />
}
