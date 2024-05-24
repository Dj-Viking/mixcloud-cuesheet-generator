import { CueSheetGenerator } from "./lib/CueSheetGenerator";
import fs from "fs";
import inquirer from "inquirer";
// the exported cue sheets are utf16le encoding // 2 years ago
// now it's utf8 lol
let dir: string[] = [];
try {
    dir = fs.readdirSync("./sheets");
    if (dir.length === 0) {
        throw new Error("\x1b[35m[ERROR]: No files found in sheets directory!\x1b[00m");
    }
} catch (error) {
    console.error("\x1b[31m error happened when reading sheets directory \x1b[00m\n", error);
    process.exit(1);
}
inquirer.prompt([{
    type: "list",
    name: "filename",
    message: "which cue sheet to convert?",
    choices: [...dir]
}]).then(result => {
    console.log('result', result);
    // gotta use utf8 now huh
    const filestr = fs.readFileSync(`./sheets/${result.filename}`, {
        encoding: "utf-8",
    });
    const csg = new CueSheetGenerator(filestr);

    csg.writeFile(csg.parseFile());
});