/*
Exercícios de interpretação de código
1.
a) ele compara a sobra da divisão de um número enviado pelo usuário e 
se o resultado for igual a 0 ou no caso, se o número é par, 
ele passa no teste

b) números pares

c) números impares

2. 
a) Mostrar o preço da fruta que o usuário escolhe pelo prompt

b) "O preço da Maçã é R$ 2.25"

c) "O preço da Pêra é R$ 5" pois caso o valor recebido 
não esteja em uma case, o código do default é executado. "default preco = 5"

3.
a) Que o valor da variavel numero é igual ao que o usuário 
responder no prompt, o js irá retornar ele em number

b) 10: "Esse número passou no teste" e -10 Nenhuma mensagem

c) Sim, a parte do let mensagem deveria estar em um escopo próprio
para o código rodar corretamente, 
o console.log(mensagem) está fora do escopo em que 
a variavel mensagem é declarada, causando um erro
*/

//1)
const idadeUsuario = Number(prompt("Quantos anos você tem?"))
if(idadeUsuario>18){
    console.log("Você pode dirigir")
}else{
console.log("Você não pode dirigir.")
}


//2
const turnoAluno = prompt("Em que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if(turnoAluno === "M"){
    console.log("Bom dia!")
}else if(turnoAluno === "V"){
    console.log("Boa tarde")
}else if(turnoAluno === "N"){
console.log("Boa noite!")
}else{
    console.log("Digite um turno válido")
}

//3
const turnoOutrosAlunos = prompt("Em que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch(turnoOutrosAlunos) {
    case "M":
    console.log("Bom dia!")
    break;
    case "V":
    console.log("Boa tarde")
    break;
    case "N":
    console.log("Boa noite!")
    break;
    default:
        console.log("Digite um turno válido")
}

//4
const generoFilme = prompt("Qual é o gênero do filme?")
const precoIngresso = Number(prompt("Qual é o preço do ingresso?"))
if((generoFilme==="fantasia")&&(precoIngresso<15)){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}