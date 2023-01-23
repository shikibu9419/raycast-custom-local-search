import { ActionPanel, Action, getPreferenceValues } from "@raycast/api";
import glob from "glob";
import { Item, generateList, splitOnce } from "./utils";

const searchDir = getPreferenceValues().searchDir;
const globPath = "**/*.pdf";

export const getItems = (searchDir: string): Item[] =>
  glob.sync(globPath, { cwd: searchDir }).map((path: string): Item => {
    const [journal, file] = splitOnce(path, "/");
    const [author, title] = splitOnce(file, " - ");

    return {
      title,
      subtitle: `${author}, ${journal}`,
      keywords: [journal].concat(author.split(" ")),
      actions: (
        <ActionPanel>
          <Action.Open title="Open file" target={`${searchDir}/${path}`} />
        </ActionPanel>
      ),
    };
  });

export default function Command() {
  return generateList(getItems(searchDir));
}
