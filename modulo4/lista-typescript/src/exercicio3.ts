function infosFilmes(nome: string, ano: number, genero: any, nota?: number ) {
    
    enum GENERO {
        ACAO = "ação",
        DRAMA = "drama",
        COMEDIA = "comédia",
        ROMANCE = "romance",
        TERROR = "terror"
    }

    type infos = {
    nome: string,
    ano: number,
    genero: GENERO.DRAMA,
    nota?: number
    }

    const filme: infos = {
        nome,
        ano,
        genero,
        nota
    }

    return console.log(filme)
}
infosFilmes("Moana", 2017, "Drama", 9.5)