import { Action, ActionPanel, Color, getPreferenceValues, List, PreferenceValues } from "@raycast/api";
import { glob } from "glob";

import Help from "./help";
import { parsePath } from "./utils";

const { targetDir, globPattern, parsePattern }: PreferenceValues = getPreferenceValues();
const items = glob.sync(globPattern, { cwd: targetDir }).map((path) => parsePath(path, parsePattern));

export default function Command() {
  return (
    <List>
      {items.map((item, index) => (
        <List.Item
          key={index}
          icon={{ source: item.icon, tintColor: Color.Blue }}
          title={item.title}
          subtitle={item.subtitle}
          keywords={item.keywords}
          actions={
            <ActionPanel>
              <Action.Open title="Open file" target={`${targetDir}/${item.path}`} />
              <Action.CopyToClipboard title="Copy to Clipboard" content={`${targetDir}/${item.path}`} />
              <Action.Push title="Help" target={<Help />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
