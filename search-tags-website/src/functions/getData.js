const { stringify } = require('postcss');
const AcumulateData = require('../storageDate/AcumulateData.js');
const checkAndClearFile = require('./checkAndClearFile.js');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchSearchTags(url) { 
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        let acumulate = new AcumulateData();

        function addData(element) {
            const tagName = $(element).get(0).tagName.toLowerCase();
            acumulate.add(tagName);

            $(element).children().each((index, child) => {
                addData(child);
            });
        }

        $('body').children().each((index, element) => {
            addData(element);
        });

        return acumulate;
    } catch (error) {
        console.log(`Erro ao buscar tags de website: ${error.message}`);
        return {};
    }
}

async function main() {
    const data = await fetchSearchTags("https://www.estantevirtual.com.br/conteudo/dicas-de-livros?gad_source=1&gclid=Cj0KCQjws560BhCuARIsAHMqE0FqpaUJXLjgBRAVybQfrok4iJZN-UwZScrXn5xHgLeCtc65J_cdBRUaAnZXEALw_wcB");
    const jsonData = JSON.stringify(data, null, 2);
    checkAndClearFile("../data/storage.json", jsonData);
}

main();
