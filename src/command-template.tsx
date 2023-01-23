import { ActionPanel, Action, getPreferenceValues } from "@raycast/api";
import glob from "glob";
import { Item, generateList } from "./utils";

const searchDir = getPreferenceValues().searchDir;
const globPath = "**/*.pdf";

export const getItems = (searchDir: string): Item[] =>
  glob.sync(globPath, { cwd: searchDir }).map((path: string): Item => {
    return {
      title: path,
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
