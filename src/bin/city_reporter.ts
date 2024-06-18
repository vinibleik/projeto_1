#!/usr/bin/env node
import { parseArgs, ParseArgsConfig } from "node:util";
import { writeFileSync } from "node:fs";
import { FORMATTERS } from "../formatters/formatters";
import { PARSERS } from "../parsers/parsers";
import { CLI } from "../cli/cli";
import { Option } from "../cli/options";
import { CityReport } from "../main";

const cli = new CLI();
cli.add(
    new Option({
        name: "help",
        type: "boolean",
        default_value: false,
        short: "h",
    }),
);

cli.add(
    new Option({
        name: "parser",
        type: "string",
        short: "p",
        enum_values: Object.keys(PARSERS),
    }),
);

cli.add(
    new Option({
        name: "format",
        type: "string",
        default_value: "html_1",
        short: "f",
        enum_values: Object.keys(FORMATTERS),
    }),
);

cli.add(
    new Option({
        name: "out-file",
        short: "o",
        type: "string",
    }),
);

cli.add(
    new Option({
        name: "in-file",
        type: "string",
        short: "i",
    }),
);

const cliConfig: ParseArgsConfig = {
    strict: true,
    allowPositionals: false,
    tokens: false,
    options: cli.toOptions(),
};

const { values } = parseArgs(cliConfig);
// @ts-ignore
const options = cli.parseValues(values);

try {
    if (options.help.value) {
        console.log(cli.help());
        process.exit(0);
    }

    if (
        !options["in-file"].value ||
        !options["format"].value ||
        !options["parser"].value
    ) {
        throw new Error("missing required arguments");
    }

    const ct = new CityReport(
        options["format"].value as string,
        options["parser"].value as string,
    );
    const report = ct.newReport(options["in-file"].value as string);

    if (options["out-file"].value) {
        writeFileSync(options["out-file"].value as string, report);
    } else {
        console.log(report);
    }
} catch (err) {
    console.error(err);
    console.log(cli.help());
}
