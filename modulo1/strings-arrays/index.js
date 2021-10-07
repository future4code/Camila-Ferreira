/*
   Exercícios de interpretação de código
1. 
a) 
let array
console.log('a. ', array)

retorna:
a. undefined => pois a variavel não foi definida

b)
array = null
console.log('b. ', array)

retorna:
b. null => pois o valor dado ao array foi nulo 

c)
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

retorna:
c. 11

d)
let i = 0
console.log('d. ', array[i])

retorna
d. 3 => pois 0 é a primeira posição dentro das arrays, e é onde está o numero 3

e)
array[i+1] = 19
console.log('e. ', array)

retorna
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 => ele trocou para 19 o número 4 que estava na posição i+1/0+1


f)
const valor = array[i+6]
console.log('f. ', valor)

retorna
f. 9 => retorna 9, o número que está na posição 6 da array


2. 
SUBI NUM ÔNIBUS EM MIRROCOS 27 => Ele deixa em maiuscula, substitui o A em Marrocos por I e contando com os espaços, nos retornou 27 itens


prompt("Cite uma tarefa") 
prompt("Cite outra tarefa")
prompt("Cite uma terceira tarefa")
const listaDeTarefas = 

console.log(listaDeTarefas) */

// Exercícios de escrita de código
//1. 

let emailUsuario = prompt("Digite seu melhor email")
let nomeUsuario = prompt("Digite seu nome")
console.log("O email " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario)

// //2. 

const comidasPreferidas = ["Chocolate", "Lasanha", "Ebicen", "Nhoque", "Batata"]
console.log(comidasPreferidas)

console.log("Essas são minhas comidas preferidas")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


// melhor jeito:
console.log(`Lista de comidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}
`)

comidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[2 - 1] = comidaUsuario
console.log(comidasPreferidas)

//3 
const listaDeTarefas = []
const primeiraTarefa = prompt("Me fale uma tarefa que precisa fazer")
listaDeTarefas.push(primeiraTarefa)
const segundaTarefa = prompt("Me fala uma segunda tarefa")
listaDeTarefas.push(segundaTarefa)
const terceiraTarefa = prompt("Me fale uma terceira tarefa")
listaDeTarefas.push(terceiraTarefa)
console.log(listaDeTarefas)

indice = prompt("Qual dessas três tarefas você já realizou? Digite 0, 1 ou 2, respectivamente")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
