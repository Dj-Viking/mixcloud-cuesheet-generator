import { CueSheetGenerator } from "./lib/CueSheetGenerator";
import fs from "fs";
import inquirer from "inquirer";
// the exported cue sheets are utf16le encoding
let dir: string[] = [];
try {
    dir = fs.readdirSync("./sheets");
    if (dir.length === 0) {
        throw new Error("No files found in sheets directory!");
    }
} catch (error) {
    console.error("\x1b[31m error happened when reading sheets directory \x1b[00m", error);
    process.exit(1);
}
inquirer.prompt([{
    type: "list",
    name: "filename",
    message: "which cue sheet to convert?",
    choices: [...dir]
}]).then(result => {
    console.log('result', result);
    const filestr = fs.readFileSync(`./sheets/${result.filename}`, {
        encoding: "utf16le",
    });
    const csg = new CueSheetGenerator(filestr);

    csg.writeFile(csg.parseFile());
});