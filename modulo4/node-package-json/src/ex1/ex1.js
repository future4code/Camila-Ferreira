//  Como node e ./index.js são fixos e ocupam a posição 0 e 1 dos argumentos
//Ex: No exercicio 1 coloco o nome e a idade como argumentos -> node ./index.js Camila 25


const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(idade) + 7

console.log(`Olá, ${nome}, você tem ${idade} anos.`)
console.log(`Olá, ${nome}, você tem ${idade} anos. Em sete anos você terá ${novaIdade} :)`)


