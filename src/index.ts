import { CityReport } from "./main";
import { join, resolve } from "node:path";
import { writeFileSync } from "node:fs";

const DATA_FOLDER = resolve(join(__dirname, "..", "data"));

const reporter = new CityReport("html_1", "json_1");

const report = reporter.newReport(join(DATA_FOLDER, "cidades-1.json"));

writeFileSync("./report.html", report);
