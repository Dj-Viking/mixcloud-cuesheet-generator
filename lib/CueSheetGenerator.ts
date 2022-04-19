import { SheetRow } from "../types";
export class CueSheetGenerator {
    public m_input_filestr = "";
    public m_destination = "./converted_sheets";
    public m_data: SheetRow[] = [];
    constructor(inputFile: string) {
        this.m_input_filestr = inputFile;
    }

    public parseFile(): void {
        let data = this.m_input_filestr.split("\n");
        console.log("parsed input filestr", data);

    }
}
