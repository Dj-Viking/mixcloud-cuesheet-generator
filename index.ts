import { CueSheetGenerator } from "./lib/CueSheetGenerator";
import fs from "fs";
// the exported cue sheets are utf16le encoding
const filestr = fs.readFileSync("./sheets/HISTORY-2022-04-19.txt", {
    encoding: "utf16le",
});
const csg = new CueSheetGenerator(filestr);



csg.writeFile(csg.parseFile());
