/*
1.
a) Matheus Nachtergaele, Virginia Cavendish, canal: "Globo", horario: "14h"

2. a)
nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"

b)
Ela (spread) pega um objeto inteiro e copia suas propriedades

c) false (foi o valor atribuido á chave "backender") e 
undefined pois não foi atribuido valor á chave "altura" 

*/

// 1.
const pessoa = {
    nome: "Stefanie",
    apelidos: ["stefinha", "stef", "ste"]
}

function pessoaApelido(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    return pessoa
}
pessoaApelido()


function novosApelidos(objeto)  { 

apelidos2 = ["stezinha", "stefanilda", "stefaninha"]
return apelidos2
}
{...}
console.log(novosApelidos(pessoa))
