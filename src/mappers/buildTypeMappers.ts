import { readFileSync } from "fs";


export function buildTypeMappers( pathToMap: string | string[],
  mapperName = "GraphQLTypes"): Record<string, string> {

  if (!pathToMap || pathToMap.length === 0) {
    throw new Error("Please enter one or more paths to files containing your TypeScript mappers declaration. See documentation for details.");
  }

  if (!Array.isArray(pathToMap)) {
    pathToMap = [pathToMap];
  }

  let mappers: Record<string, string> = {};


  for (const path of pathToMap) {
    mappers = {...createMappersFromFile(path, mapperName)}
  }
}

function createMappersFromFile(filePath: string, mapperName: string): Record<string, string> {

}
