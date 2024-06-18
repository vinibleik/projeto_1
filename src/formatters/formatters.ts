import text from "./textFormatter";
import html from "./htmlFormatter";
import { Formatter, NewFormatter } from "./baseFormatter";

export const FORMATTERS: { [type: string]: NewFormatter } = {
    ...text,
    ...html,
};

export function newFormatter(type: string): Formatter {
    const formatter = FORMATTERS[type];
    if (!formatter) {
        throw new Error(`Unknown formatter type: ${type}`);
    }
    return new formatter();
}
