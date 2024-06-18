type OptionsType = "string" | "boolean";
type OptionsMultiple = boolean | undefined;
type OptionsShort = string | undefined;
type OptionsDefault = string | boolean | string[] | boolean[] | undefined;

export type ParsedValues = {
    [k: string]: OptionsDefault;
};

export interface ParseArgsOptionConfig {
    type: OptionsType;
    multiple?: OptionsMultiple;
    short?: OptionsShort;
    default?: OptionsDefault;
}

interface ParseOptions {
    config: ParseArgsOptionConfig;
    usage: () => string;
    toConfig: () => ParseArgsOptionConfig;
    setValue: (parsedValues: ParsedValues) => void;
}

type OptionValues = {
    name: string;
    type: OptionsType;
    multiple?: OptionsMultiple;
    short?: OptionsShort;
    default_value?: OptionsDefault;
    enum_values?: string[];
};

export class Option implements ParseOptions {
    name: string;
    config: ParseArgsOptionConfig;
    value: OptionsDefault;
    enum_values;

    constructor({
        name,
        type,
        multiple,
        short,
        default_value,
        enum_values,
    }: OptionValues) {
        this.name = name;
        this.config = {
            type,
            multiple,
            short,
            default: default_value,
        };
        this.enum_values = enum_values;
        this.value = undefined;
    }

    toConfig(): ParseArgsOptionConfig {
        const config = this.config;
        const options: ParseArgsOptionConfig = {
            type: config.type,
        };
        for (const [key, value] of Object.entries(config)) {
            if (value) {
                // @ts-ignore
                options[key] = value;
            }
        }
        return options;
    }

    usage(): string {
        const config = this.config;
        let option = `--${this.name}`;

        if (config.short) {
            option += `, -${config.short}`;
        }

        if (config.default) {
            option += `\tdefault: (${config.default})`;
        }

        if (this.enum_values) {
            const enum_values = this.enum_values.join(", ");
            option += `\n  valid values: ${enum_values}`;
        }

        return option;
    }

    setValue(parsedValues: ParsedValues): void {
        this.value = parsedValues[this.name];
    }
}
