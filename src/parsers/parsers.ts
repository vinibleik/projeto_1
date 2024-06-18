import CSVParsers from "./csvParser";
import JSONParsers from "./jsonParser";
import { NewParserCreator, ParserCreator } from "./baseParser";

export const PARSERS: { [k: string]: NewParserCreator } = {
    ...CSVParsers,
    ...JSONParsers,
};

export function newParser(parserType: string): ParserCreator {
    const parser = PARSERS[parserType];
    if (!parser) {
        throw new Error(`Unknown parser type: ${parserType}`);
    }
    return new parser();
}
