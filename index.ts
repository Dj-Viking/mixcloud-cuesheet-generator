import { SheetRow } from "./types";
class CueSheetGenerator {
    public m_input_file = "";
    public m_destination = "./converted_sheets"
    public m_data: SheetRow[] = []
    constructor(inputFile: string) {
        this.m_input_file = inputFile;
    }



}