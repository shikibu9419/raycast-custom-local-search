#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Customize new Command of Custom Local Search
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "Name" }

// Documentation:
// @raycast.description Update manifest to create new search command
// @raycast.author shikibu9419

const packageJson = require(`../package.json`);
const fs = require("fs");
const child_process = require("child_process");

const searchCommand = packageJson.commands.find((c) => c.name === "download");
const newCommand = JSON.parse(JSON.stringify(searchCommand));
const name = process.argv.slice(2)[0];
newCommand.name = name.toLowerCase();
newCommand.title = `Search My ${name} Files`;
newCommand.description = `Search my file in ${name}`;
packageJson.commands.push(newCommand);

fs.writeFileSync("../package.json", JSON.stringify(packageJson, null, 2));
fs.copyFileSync("../src/download.tsx", `../src/${name.toLowerCase()}.tsx`);

child_process.exec("npm run dev", { cwd: "../", timeout: 2000 }, () => {
  console.log(`Suceeded to create new command: "${name}"`);
});
