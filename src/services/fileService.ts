import { promises } from "node:fs";
import { resolve } from "node:path";

export async function getAllFilesInFolder(folder: string): Promise<string[]> {
  const folderPath = relativeToAbsolutePath(folder);
  try {
    const files = await promises.readdir(folderPath);
    return removeFileExtentions(files);
  } catch (error) {
    console.error(error);
    return [""];
  }
}

function relativeToAbsolutePath(relativePath: string): string {
  return resolve(relativePath);
}

function removeFileExtentions(files: string[]) {
  return files.map((file) => file.split(".")[0]);
}
