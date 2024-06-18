import { ParserCreator, Parser, City, NewParserCreator } from "./baseParser";

type DataJSON_1 = {
    sigla: string;
    nome: string;
    cidades: string[];
};

type CitiesJSON1 = {
    estados: DataJSON_1[];
};

/**
 * JSON with format:
 *
 * {
 *   "estados": [
 *     {
 *       "sigla": "AC",
 *       "nome": "Acre",
 *       "cidades": [
 *         "Acrelândia",
 *         "Assis Brasil",
 *         "Brasiléia",
 *         "Bujari",
 *          ...
 * */
class JSONCities1Parser implements Parser {
    parse(content: string): City[] {
        return (JSON.parse(content) as CitiesJSON1).estados
            .map((c) => c.cidades)
            .flat();
    }
}

class JSONCities1 extends ParserCreator {
    public parserFactory(): Parser {
        return new JSONCities1Parser();
    }
}

type DataJSON_2 = {
    ID: string;
    Nome: string;
    Estado: string;
};

type CitiesJSON2 = DataJSON_2[];

/**
 * JSON with format:
 * [
 *   {
 *     "ID": "1",
 *     "Nome": "Afonso Cláudio",
 *     "Estado": "8"
 *   },
 *   {
 *     "ID": "2",
 *     "Nome": "Água Doce do Norte",
 *     "Estado": "8"
 *   },
 *   ...
 * */
class JSONCities2Parser implements Parser {
    parse(content: string): City[] {
        return (JSON.parse(content) as CitiesJSON2).map((c) => c.Nome);
    }
}

class JSONCities2 extends ParserCreator {
    public parserFactory(): Parser {
        return new JSONCities2Parser();
    }
}

const PARSERS: { [k: string]: NewParserCreator } = {
    json_1: JSONCities1,
    json_2: JSONCities2,
};

export default PARSERS;
