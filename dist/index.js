"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CueSheetGenerator_1 = require("./lib/CueSheetGenerator");
const fs_1 = __importDefault(require("fs"));
const filestr = fs_1.default.readFileSync("./sheets/HISTORY-2022-04-19.txt", {
    encoding: "utf16le",
});
const csg = new CueSheetGenerator_1.CueSheetGenerator(filestr);
csg.parseFile();
//# sourceMappingURL=index.js.map