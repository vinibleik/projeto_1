import { Option, ParseArgsOptionConfig, ParsedValues } from "./options";

export class CLI {
    public options: { [k: string]: Option };

    constructor() {
        this.options = {};
    }

    toOptions(): { [k: string]: ParseArgsOptionConfig } {
        const options: { [k: string]: ParseArgsOptionConfig } = {};
        for (const [key, value] of Object.entries(this.options)) {
            options[key] = value.toConfig();
        }
        return options;
    }

    add(op: Option): void {
        this.options[op.name] = op;
    }

    parseValues(parsedValues: ParsedValues) {
        for (const key in parsedValues) {
            this.options[key].setValue(parsedValues);
        }

        return this.options;
    }

    help(): string {
        let h = "";
        Object.values(this.options).forEach((op) => {
            h += op.usage() + "\n";
        });
        return h;
    }
}
