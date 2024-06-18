// Factory Method
export type City = string;

export interface Parser {
    /**
     * Parse the content of a file that contains cities names.
     * @param content - File content as string to be parsed.
     * @returns An array of cities names.
     * @throws If the string is an unsupported format.
     * */
    parse(content: string): City[];
}

export abstract class ParserCreator {
    /**
     * Factory method that creates a parser.
     * @returns A parser.
     * */
    public abstract parserFactory(): Parser;

    /**
     * Parse the content of a file that contains cities names.
     * @param content - File content as string to be parsed.
     * @returns An array of cities names.
     * @throws If the string is an unsupported format.
     * */
    public parseContent(content: string): City[] {
        return this.parserFactory().parse(content);
    }
}

export interface NewParserCreator {
    new (): ParserCreator;
}
