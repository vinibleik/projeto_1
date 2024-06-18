// Strategy pattern
import { City } from "../parsers/baseParser";

export interface Formatter {
    /**
     * Format the cities in a specific way
     * @param cities - The cities to format
     * @returns The formatted string
     */
    format(cities: City[]): string;
}

export interface NewFormatter {
    new (): Formatter;
}
