import { City } from "../parsers/baseParser";
import { Formatter, NewFormatter } from "./baseFormatter";

export class HTMLFormatter1 implements Formatter {
    private template: string = `\
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
        $cities
    </ul>
  </body>
</html>
`;
    private varTemplate = "$cities";
    format(cities: City[]): string {
        return this.template.replace(
            this.varTemplate,
            cities.map((city) => `\t\t<li>${city}</li>`).join("\n"),
        );
    }
}

export class HTMLFormatter2 implements Formatter {
    private template: string = `\
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <header>
      <h1>Relatório de Nomes de Cidades</h1>
    </header>
    <main>
      <ul>
        $cities
      </ul>
    </main>
  </body>
</html>
`;
    private varTemplate = "$cities";
    format(cities: City[]): string {
        return this.template.replace(
            this.varTemplate,
            cities
                .map(
                    (city) =>
                        `\t\t<li><span class="cidade">${city}</span> - </li>`,
                )
                .join("\n"),
        );
    }
}

const FORMATTERS: { [type: string]: NewFormatter } = {
    html_1: HTMLFormatter1,
    html_2: HTMLFormatter2,
};

export default FORMATTERS;
