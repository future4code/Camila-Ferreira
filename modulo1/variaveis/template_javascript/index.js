/* 
1.
10
10, 5

2.
10, 10, 10

3.
let horasTrabalho = prompt("Quantas horas você trabalha por dia")
let recebePorDia = prompt("Quantos você recebe por dia?")
alert("Você recebe $ {horasTrabalho/recebePorDia} por hora")

Esse programa vai pegar as informações do usuário: 
quantas horas ele trabalha por dia e depois quanto ele recebe por hora
Em seguida fazer a operação horasTrabalho/recebePorDia e retornar para o usuário o quanto ele recebe por hora

*/


// Exercícios de escrita de código
// 1.
// a)
let nomeUsuario
//b
let idadeUsuario
//c
console.log(typeof nomeUsuario, typeof idadeUsuario)
// d) os dois retornam como undefined pois não foi definido um valor para as váriaveis

// e)
nomeUsuario = prompt("Qual o seu nome?")
idadeUsuario = prompt("Qual a sua idade?")
//f
console.log(typeof nomeUsuario, typeof idadeUsuario)
// os dois retornam como string pois tudo que o usuário insere na prompt é string
//g)
console.log("Olá",nomeUsuario,", você tem",idadeUsuario, "anos")

//2.
//a)
let corVerde = prompt("Sua cor preferida é verde?")
let corRoxo = prompt("Sua cor preferida é roxo?")
let corAzul = prompt("Sua cor preferida é azul?")
//b)
console.log("Sua cor preferida é verde?", corVerde)
console.log("Sua cor preferida é Roxo?", corRoxo)
console.log("Sua cor preferida é Azul?", corAzul)

//3.
let a = 10
let b = 25
c = a 
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)