// Crie um função que receba uma `string` com o nome e outra `string` 
// com uma data de nascimento (ex.: “24/04/1993”). 
//A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato: 

// 
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
// ```

function dataDeNascimento(nome: string, nascimento: string){
    const separaData = nascimento.split("/")
    const dia = separaData[0]
    const mês = separaData[1]
    const ano = separaData[2]
    return console.log(`Olá, me chamo ${nome}, nasci no dia ${dia} do mês ${mês} do ano de ${ano} `)
}
dataDeNascimento("Camila", "18/12/1996")