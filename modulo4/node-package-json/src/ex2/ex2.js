// arg:  node ./index.js 5 5

const num1 = process.argv[2]
const num2 = process.argv[3]

const respostaMultiplicacao = num1 * num2
console.log(`Resposta: ${respostaMultiplicacao}`)

//

// arg: node ./index.js 5 5 57 57
const num3 = process.argv[4]
const num4 = process.argv[5]

const respostaSoma = Number(num3) + Number(num4)
console.log(`Resposta: ${respostaSoma}`)