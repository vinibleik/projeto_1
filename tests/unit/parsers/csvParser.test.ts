import csvParser from "../../../src/parsers/csvParser";
import { describe, expect, test } from "@jest/globals";

describe("CSVParser", () => {
    describe("CSVParser1", () => {
        const parser = new csvParser.csv_1();
        test("parseContent valid", () => {
            const content = `COD UF,COD,NOME
11,1100015,Alta Floresta D'oeste
11,1100023,Ariquemes
11,1100031,Cabixi
11,1100049,Cacoal
11,1100056,Cerejeiras
11,1100064,Colorado do Oeste`;
            const result = parser.parseContent(content);
            expect(result).toEqual([
                "Alta Floresta D'oeste",
                "Ariquemes",
                "Cabixi",
                "Cacoal",
                "Cerejeiras",
                "Colorado do Oeste",
            ]);
        });
    });
});
