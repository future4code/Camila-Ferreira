/* 
Exercícios de interpretação de código
1. a) false
b)false 
c)true
d) boolean

2. Tudo que o usuário digita retorna como string

3. Dessa forma, como tudo o que o usuário digita retorna como string,
se ele deixar o código desse jeito irá contatenar as strings e não somar.

3. O problema é resolvido colocando Number() antes das variaveis pois assim elas retornam como número
*/

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero);
console.log(soma);



/*
Exercícios de escrita de código
1.
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) 

*/

let idadeUsuario = prompt("Qual é sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade da sua melhor amiga/o?")

let resultado = Number(idadeUsuario) >= Number(idadeMelhorAmigo)
console.log("Sua idade é maior do que a do seu melhor amiga/o?", resultado )
console.log(idadeUsuario - idadeMelhorAmigo)

/*2. 
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
Todos resultam em 0 porque como são números pares, ao dividir o número par pelo 2, que também é par, não há sobras

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
O resultado deixa de ser 0 e passa a ser a sobra desse número impar divido por 2 
*/

let numeroPar = prompt("Insira um número par")
console.log(Number(numeroPar) % 2)

 


//  para terminar
// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas


// let idadeAnos = prompt("Quantos anos você tem?")
// let idadeMeses = idadeAnos * 12
// let idadeDias = idadeAnos * 365
// let idadeHoras = 

//  Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? 


// let numeroUm = prompt("Escreva um número")
// let numeroDois = prompt("Escreva outro número")