import { Detail, environment } from "@raycast/api";

export default function Help() {
  const content = `# Custom Local Search
To create new search command, do follows:
1. Download this script command to your Script Directory to execute create command.
2. Change \`rootPath\` variable in the script to follows:
\`\`\`
${environment.assetsPath.split("/").slice(0, -1).join("/")}
\`\`\`

Author: shikibu9419
`;

  return <Detail markdown={content} />;
}
