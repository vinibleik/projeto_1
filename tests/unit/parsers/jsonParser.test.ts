import jsonParser from "../../../src/parsers/jsonParser";
import { describe, expect, test } from "@jest/globals";

describe("JSONParser", () => {
    describe("JSONParser1", () => {
        const parser = new jsonParser.json_1();
        test("parseContent valid", () => {
            const content = `{
   "estados":[
      {
         "sigla":"AC",
         "nome":"Acre",
         "cidades":[
            "Acrelândia",
            "Assis Brasil",
            "Brasiléia"
         ]
      },
      {
         "sigla":"AL",
         "nome":"Alagoas",
         "cidades":[
            "Água Branca",
            "Anadia",
            "Arapiraca"
         ]
      },
      {
         "sigla":"AM",
         "nome":"Amazonas",
         "cidades":[
            "Alvarães",
            "Amaturá",
            "Anamã"
         ]
      }
   ]
}`;
            const result = parser.parseContent(content);
            expect(result).toEqual([
                "Acrelândia",
                "Assis Brasil",
                "Brasiléia",
                "Água Branca",
                "Anadia",
                "Arapiraca",
                "Alvarães",
                "Amaturá",
                "Anamã",
            ]);
        });
    });

    describe("JSONParser2", () => {
        const parser = new jsonParser.json_2();
        test("parseContent valid", () => {
            const content = `[
  {
    "ID": "1",
    "Nome": "Afonso Cláudio",
    "Estado": "8"
  },
  {
    "ID": "2",
    "Nome": "Água Doce do Norte",
    "Estado": "8"
  },
  {
    "ID": "3",
    "Nome": "Águia Branca",
    "Estado": "8"
  },
  {
    "ID": "4",
    "Nome": "Alegre",
    "Estado": "8"
  },
  {
    "ID": "5",
    "Nome": "Alfredo Chaves",
    "Estado": "8"
  },
  {
    "ID": "6",
    "Nome": "Alto Rio Novo",
    "Estado": "8"
  }
]`;
            const result = parser.parseContent(content);
            expect(result).toEqual([
                "Afonso Cláudio",
                "Água Doce do Norte",
                "Águia Branca",
                "Alegre",
                "Alfredo Chaves",
                "Alto Rio Novo",
            ]);
        });
    });
});
