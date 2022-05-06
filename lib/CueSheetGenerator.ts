/**
 * NOTICE this is parsing cue sheets based on the way tracks are named in my own XDJ USB stick
 * so the parsing is very specific and one size may not fit all
 * 
 * also some minimal editing will be required like separating the song names and the artist name by a -
 * example: song_name - artist_name
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
        // console.log("parsed input filestr", data);
        //remove first row these are the headers
        data.shift();
        console.log("without first row", data);
        //remove everything after the track name and artist name
        let parts = [] as string[][];
        parts = data.map(row => {
            let parts = [];
            parts = row.split("\t");
            return parts;
        });
        console.log("parts in rows", parts);

        let words = [] as string[][];

        words = parts.map(part => {
            return part.filter(words => /\w/g.test(words));
        });

        words = words.map(words => {
            words.shift();
            return words;
        });

        console.log("words", words);

        words = words.map((words, i) => {
            if (/([a-zA-Z]\d?)/g.test(words[i])) return [words[0], words[1]];
            return [words[0], words[1]];
        });

        console.log("words again", words);

        let rows = words.flat<string[][], 1>(1) as string[];

        console.log("rows now", rows, "rows length", rows.length);

        rows = rows.map(row => {
            if (!/[0-9]+\.[0-9]+/g.test(row)) return row;
            else return "\n";
        }).filter(item => item !== void 0).filter(item => item !== "\n");

        console.log("rows now", rows, "rows length", rows.length);

        let rowstr = rows.join("\n");
        console.log("row str", rowstr);

        return rowstr;

    }

    public writeFile(str: string): void {
        // this file path is in the context of where the npm script was ran (root directory)
        fs.writeFile(`./converted_sheets/converted.${Date.now()}.txt`, str, { encoding: "utf-8" }, (err) => {
            if (err) throw err;
            console.log("\x1b[32m wrote file to converted_sheets folder! \x1b[00m");
        });
    }
}
