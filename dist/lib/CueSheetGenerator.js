"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CueSheetGenerator = void 0;
class CueSheetGenerator {
    constructor(inputFile) {
        this.m_input_filestr = "";
        this.m_destination = "./converted_sheets";
        this.m_data = [];
        this.m_input_filestr = inputFile;
    }
    parseFile() {
        let data = this.m_input_filestr.split("\n");
        console.log("parsed input filestr", data);
    }
}
exports.CueSheetGenerator = CueSheetGenerator;
//# sourceMappingURL=CueSheetGenerator.js.map