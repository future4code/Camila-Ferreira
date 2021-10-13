// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const resultado = num1 + num2
  return resultado
}
soma(1,2)


 // EXERCÍCIO 0B

function imprimeMensagem() {
const mensagem = prompt("Digite uma mensagem!")
return console.log(mensagem)
}
imprimeMensagem()


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura = prompt("Insira uma altura")
const largura = prompt("Insira uma largura")
const operacao = altura * largura
return console.log(operacao)
}
calculaAreaRetangulo()


// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = prompt("Qual o ano atual?")
const anoNascimento = prompt("Em que ano você nasceu?")
const idade = anoAtual - anoNascimento
return console.log(idade)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = peso / (altura * altura)
return imc
}
calculaIMC(51,1.56)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é seu nome?")
  const idade = prompt("Qual é sua idade?")
  const email = prompt("Qual é seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
}

imprimeInformacoesUsuario()



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 const cor1 = prompt("Qual sua primeira cor preferida?")
 const cor2 = prompt("Qual sua segunda cor preferida?")
 const cor3 = prompt("Qual sua terceira cor preferida?")
 const tresFavoritas = [cor1, cor2, cor3]
console.log(tresFavoritas)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiusc = string.toUpperCase()
    return stringMaiusc
}

retornaStringEmMaiuscula("oi")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const ingressosVendidos = custo / valorIngresso
  return ingressosVendidos
}
calculaIngressosEspetaculo(3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const mesmoTamanho = string1.length === string2.length
return mesmoTamanho
}
checaStringsMesmoTamanho("ola", "abcd")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array)
{
const primeiroElemento = array[0]
return primeiroElemento
}
retornaPrimeiroElemento(["Maca", "Banana", "Laranja"])


// EXERCÍCIO 10
function retornaUltimoElemento(array) 
{
const ultimoElemento = array[array.length-1]
return ultimoElemento
}
retornaUltimoElemento(["Maca", "Banana", "Laranja"])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiro = array[0]
const segundo = array[array.length-1]
array[0] = segundo
array[array.length-1] = primeiro
return array
}
trocaPrimeiroEUltimo(["Maca", "Banana", "Laranja"])


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) 
{
const igualdade = string1.toLowerCase() === string2.toLowerCase()
return console.log(igualdade)
}
checaIgualdadeDesconsiderandoCase("banana", "banANA")


// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui

// }