import { ParserCreator, Parser, City, NewParserCreator } from "./baseParser";

/**
 * CSV with format:
 *
 * COD UF,COD,NOME
 * 11,1100015,Alta Floresta D'oeste
 * 11,1100023,Ariquemes
 * ...
 * */
class CSVCities1Parser implements Parser {
    parse(content: string): City[] {
        return content
            .split("\n")
            .slice(1)
            .map((line) => line.split(","))
            .map((values) => values.at(-1))
            .filter((v) => v !== undefined) as string[];
    }
}

class CSVCities1 extends ParserCreator {
    public parserFactory(): Parser {
        return new CSVCities1Parser();
    }
}

const PARSERS: { [k: string]: NewParserCreator } = {
    csv_1: CSVCities1,
};

export default PARSERS;
