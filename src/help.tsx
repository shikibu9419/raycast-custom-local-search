import { Detail, environment } from "@raycast/api";

export default function Help() {
  const content = `# Custom Local Search
## How can I set \`match pattern\` config?
- %t: title
- %s: subtitle
- %k: keywords
- %{k:<chars>}: keywords splitted by <chars> (\`.\`, \` - \`, etc.)

e.g. If you set \`%k/%s - %t\` to \`match pattern\`, file name \`Pops/Artist - Song.mp3\` parsed:
- title: "Song.mp3"
- subtitle: "Artist"
- keywords: "Pops"

## How can I create new custom search command?

You can create new custom search command (e.g. \`Documents\` to search \`~/Documents/**/*.pdf\`) by getting the source.

After downloading this extension,
1. Add directory \`custom-local-search/scripts\` to Script Commands (see https://github.com/raycast/script-commands)
2. Run the script *Customize new Command of Custom Local Search* on Raycast and enter your new command name.

Copyright: shikibu9419
`;

  return <Detail markdown={content} />;
}
