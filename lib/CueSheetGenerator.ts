/**
 * NOTICE this is parsing cue sheets based on the way tracks are named in my own XDJ USB stick
 * so the parsing is very specific and one size may not fit all
 * 
 * also some minimal editing will be required like separating the song names and the artist name by a -
 * example: artist_name - song_name
 * this will separate itself within mixcloud
 * 
 * time stamps not included
 */
import fs from "fs";
export class CueSheetGenerator {
    public m_input_filestr!: string;

    constructor(inputFile: string) {
        this.m_input_filestr = inputFile;
    }

    public parseFile(): string {
        let data = this.m_input_filestr.split("\r\n");
        console.log("parsed input filestr", data);
        //remove first row these are the file header magic numbers for the file format
        data.shift();
        console.log("without first row", data);
        //remove everything after the track name and artist name
        let parts = [] as string[][];
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

        // remove every even numbered item
        parts = parts.map((row, i) => i % 2 !== 0 ? [] : row).filter((_) => _.length !== 0);
        console.log("filtered parts", parts.flat());
        const morefilteredParts = parts.flat().map(str => {

            let res = "";

            res = / - /g.test(str) ? str.slice(12) : str.slice(15);

            return res;
        }).filter(str => str !== "");
        console.log("more filtered parts", morefilteredParts);


        return morefilteredParts.join("\n");

    }

    public writeFile(str: string): void {
        // this file path is in the context of where the npm script was ran (root directory)
        fs.writeFile(`./converted_sheets/converted.${Date.now()}.txt`, str, { encoding: "utf-8" }, (err) => {
            if (err) throw err;
            console.log("\x1b[32m wrote file to converted_sheets folder! \x1b[00m");
        });
    }
}
