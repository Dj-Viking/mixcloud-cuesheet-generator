import { CueSheetGenerator } from "lib/CueSheetGenerator";
import fs from "fs";
const filestr = fs.readFileSync("./sheets/HISTORY-2022-04-19.txt", {
    encoding: "utf-8",
});
const csg = new CueSheetGenerator(filestr);
