import { City } from "../parsers/baseParser";
import { Formatter, NewFormatter } from "./baseFormatter";

export class TextFormatter1 implements Formatter {
    private template: string = `\
Relatório de Nomes de Cidades
=============================
$cities
`;
    private varTemplate = "$cities";
    format(cities: City[]): string {
        return this.template.replace(
            this.varTemplate,
            cities.map((city) => `* ${city}`).join("\n"),
        );
    }
}

const FORMATTERS: { [type: string]: NewFormatter } = {
    text_1: TextFormatter1,
};

export default FORMATTERS;
