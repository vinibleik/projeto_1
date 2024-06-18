import { join } from "node:path";
import { readData } from "../../../src/loaders/loader";
import { describe, test, expect } from "@jest/globals";

describe("Loader", () => {
    test("readData from a correct file", () => {
        const filename = join(__dirname, "data.txt");
        const expected = "data string\n";
        const data = readData(filename);
        expect(data).toStrictEqual(expected);
    });

    test("readData from a incorrect file", () => {
        expect(() => {
            readData("incorrect.json");
        }).toThrowError();
    });
});
