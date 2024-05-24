"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CueSheetGenerator = void 0;
const fs_1 = __importDefault(require("fs"));
class CueSheetGenerator {
    constructor(inputFile) {
        this.m_input_filestr = inputFile;
    }
    parseFile() {
        let data = this.m_input_filestr.split("\r\n");
        console.log("parsed input filestr", data);
        data.shift();
        console.log("without first row", data);
        let parts = [];
        parts = data.map(row => {
            let parts = [];
            parts = row.split("\t");
            return parts;
        });
        console.log("====================");
        console.log("====================");
        console.log("====================");
        console.log("====================");
        console.log("====================");
        console.log("parts in rows", parts);
        parts = parts.map((row, i) => i % 2 !== 0 ? [] : row).filter((_) => _.length !== 0);
        console.log("filtered parts", parts.flat());
        const morefilteredParts = parts.flat().map(str => {
            let res = "";
            res = / - /g.test(str) ? str.slice(12) : str.slice(15);
            res = res.replace(/^ - /g, "");
            return res;
        }).filter(str => str !== "");
        console.log("more filtered parts", morefilteredParts);
        return morefilteredParts.join("\n");
    }
    writeFile(str) {
        fs_1.default.writeFile(`./converted_sheets/converted.${Date.now()}.txt`, str, { encoding: "utf-8" }, (err) => {
            if (err)
                throw err;
            console.log("\x1b[32m wrote file to converted_sheets folder! \x1b[00m");
        });
    }
}
exports.CueSheetGenerator = CueSheetGenerator;
//# sourceMappingURL=CueSheetGenerator.js.map