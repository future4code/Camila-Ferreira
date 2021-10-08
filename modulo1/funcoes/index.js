/* Exercícios de interpretação de código
1. 
a)  10 e 50
b) o código seria executado mas nada apareceria na tela, pois é ele o responsável 
por mostrar o resultado no console

2.
a) Essa função pede ao usuário que digite um texto e faz com que esse 
texto retorne em minuscula e se incluir a palavra "cenoura" retorna como true
b) i. todas retornam true




*/
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


/* Exercícios de escrita de código
1.
*/

//a) 
function minhasInfos() {
    console.log("Eu sou Camila, tenho 24 anos, moro em São Bernardo do Campo e sou estudante.")
}


console.log(minhasInfos)

//b)

function infosEstudante(nome, idade, cidade, profissao) {
const resultadoFrase(`Eu sou ${nome} tenho ${idade} moro em ${cidade} e sou ${profissao}`)
}

const infoUsuario = infosEstudante("Bruno", 50, "São Paulo", "Estudante")
console.log(infoUsuario)

/*
//b. function exercicio1b(nome, idade, endereço, profissão) {
const fraseFinal =`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
return fraseFinal
} 

const resultado1b = exercicio1b("Bruno", 50, "São Paulo", "Estudante")


// 2d
function exercicio2d(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.length)
    console.log(mensagem.toUpperCase())
}
exercicio2d("Boa tarde Carver!") // puxando a função!!!!!!!




*/ 