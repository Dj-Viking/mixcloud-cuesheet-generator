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
        data.shift();
        console.log("without first row", data);
        let parts = [];
        parts = data.map(row => {
            let parts = [];
            parts = row.split("\t");
            return parts;
        });
        console.log("parts in rows", parts);
        let words = [];
        words = parts.map(part => {
            return part.filter(words => /\w/g.test(words));
        });
        words = words.map(words => {
            words.shift();
            return words;
        });
        console.log("words", words);
        words = words.map((words, i) => {
            if (/([a-zA-Z]\d?)/g.test(words[i]))
                return [words[0], words[1]];
            return [words[0], words[1]];
        });
        console.log("words again", words);
        let rows = words.flat(1);
        console.log("rows now", rows, "rows length", rows.length);
        rows = rows.map(row => {
            if (!/[0-9]+\.[0-9]+/g.test(row))
                return row;
            else
                return "\n";
        }).filter(item => item !== void 0).filter(item => item !== "\n");
        console.log("rows now", rows, "rows length", rows.length);
        let rowstr = rows.join("\n");
        console.log("row str", rowstr);
        return rowstr;
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