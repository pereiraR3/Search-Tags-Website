const fs = require('fs');

function checkAndClearFile(filePath, jsonData) {
  try {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);

      if (stats.size > 0) {
        fs.writeFileSync(filePath, ''); // Limpa o arquivo
        console.log(`O conteúdo do arquivo ${filePath} foi apagado.`);
      } else {
        console.log(`O arquivo ${filePath} já está vazio.`);
      }

      // Usando fs.writeFile com callback para evitar erros
      fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
          console.error(`Erro ao escrever no arquivo: ${err.message}`);
        } else {
          console.log(`Dados foram escritos no arquivo ${filePath}`);
        }
      });

    } else {
      console.log(`O arquivo ${filePath} não existe.`);
    }
  } catch (error) {
    console.error(`Erro ao verificar/apagar o arquivo: ${error.message}`);
  }
}

module.exports = checkAndClearFile;
