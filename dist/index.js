"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CueSheetGenerator_1 = require("./lib/CueSheetGenerator");
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
let dir = [];
try {
    dir = fs_1.default.readdirSync("./sheets");
    if (dir.length === 0) {
        throw new Error("\x1b[35m[ERROR]: No files found in sheets directory!\x1b[00m");
    }
}
catch (error) {
    console.error("\x1b[31m error happened when reading sheets directory \x1b[00m\n", error);
    process.exit(1);
}
inquirer_1.default.prompt([{
        type: "list",
        name: "filename",
        message: "which cue sheet to convert?",
        choices: [...dir]
    }]).then(result => {
    console.log('result', result);
    const filestr = fs_1.default.readFileSync(`./sheets/${result.filename}`, {
        encoding: "utf-8",
    });
    const csg = new CueSheetGenerator_1.CueSheetGenerator(filestr);
    csg.writeFile(csg.parseFile());
});
//# sourceMappingURL=index.js.map