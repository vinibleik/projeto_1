import { readFileSync } from "node:fs";

/**
 * Read the content of a file.
 * @param filename - The name of the file to read.
 * @returns The content of the file.
 * @throws If the file does not exist or cannot be read.
 * */
export function readData(filename: string): string {
    try {
        return readFileSync(filename, { encoding: "utf8" });
    } catch (err) {
        throw new Error(`Error loading the file ${filename}: ${err}`);
    }
}
