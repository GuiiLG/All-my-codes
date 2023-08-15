process.stdout.write('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
/*
What is nodeJS ?
JS runtime environment: faz a interação com  o SO que faz a interação com hardware. Você não
consegue rodar JS sem ter ambiente especial que no caso seria nodeJS

V8 (google engine):
interpretador de JS do google

Como funciona JS ?

GLOBALS-------------------------------------------------------------------------------------------------------------------
__dirname : diretório local do arquivo
__filename: fala o caminho do arquivo + nome do arquivo

require() = chama módulos 
basename() = fala o nome do arquivo

console.log(require('path').basename(__filename));

criar módulo: module.exports = "algum texto"

para  exportar esse módulo para outro documento js: require('./coloca o caminho do arquivo')

process : passa alguma variaveis
console.log(` Seu nome é ${process.argv[2]}`)
digita node node --name 'Guilherme Luigi' --greeting 'Hello'

process.stdout.write('');

desafio;
const getFlagValue = require('./exports')

console.log(` Ola  ${getFlagValue('--name')} `)

------ Segundo código

function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index]
}
module.exports = getFlagValue;

NPM : Node package manager
json: Java Script object notation(objeto java script)


*/ 