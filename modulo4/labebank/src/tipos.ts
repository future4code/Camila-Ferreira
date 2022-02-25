export type Transacoes = {
    valor: number,
    data: Date,
    descricao: string
}

export type Conta = {
    nome: string,
    CPF: string,
    dataNascimento: Date,
    extrato: Array<Transacoes>
}