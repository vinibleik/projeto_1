// Facade pattern
import { Formatter } from "./formatters/baseFormatter";
import { newFormatter } from "./formatters/formatters";
import { ParserCreator } from "./parsers/baseParser";
import { newParser } from "./parsers/parsers";
import { readData } from "./loaders/loader";

export class CityReport {
    #formatter: Formatter;
    #parser: ParserCreator;

    constructor(formatter: string, parser: string) {
        this.#formatter = newFormatter(formatter);
        this.#parser = newParser(parser);
    }

    public set formatter(format: string) {
        this.#formatter = newFormatter(format);
    }

    public set parser(parse: string) {
        this.#parser = newParser(parse);
    }

    public newReport(filename: string): string {
        const data = readData(filename);
        const parsedData = this.#parser.parseContent(data);
        return this.#formatter.format(parsedData);
    }
}
