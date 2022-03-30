//EXERCÍCIOS 
//1. 
// a)
// const minhaString :string = 18 
// Retorna um erro pois "o tipo number não pode ser dado a algo que já foi declarado como tipo string"

// b) Para que ela aceite também strings é só colocar o tipo number, o símbolo | de "ou" e então o outro tipo, no caso string:

const meuNumero: number | string = 23
console.log(meuNumero)

// c) Agora crie um novo objeto. Este objeto é uma pessoa, 
//e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os 
//campos definidos acima. Crie um **tipo** `Pessoa` para garantir
// que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade `corFavorita` para que apenas 
//seja possível escolher entre as cores do arco-íris. 
//Utilize um `enum` para isso.

type Pessoa = {
nome: string,
idade: number,
corFavorita: string }

enum CoresArcoIris {
    ROXO = "Roxo",
    AZUL = "Azul",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    ANIL = "Anil"

}

const pessoas = {
    nome: "Camila",
    idade: 25,
    corFavorita: CoresArcoIris.ROXO
}

