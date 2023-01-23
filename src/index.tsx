import { ActionPanel, Action } from "@raycast/api";
import { generateList } from "./utils";

const items = [
  {
    title: "Edit Search",
    subtitle: "Edit Search",
    actions: (
      <ActionPanel>
        <Action.OpenWith title="Open the project with your editor" path={} />
      </ActionPanel>
    ),
  },
];

export default function Command() {
  return generateList(items);
}
