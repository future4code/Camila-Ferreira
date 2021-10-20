```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000 
 const comissaoVenda = qtdeCarrosVendidos * 100
 const comissaoValorCarro = valorTotalVendas * 0.05
 const resultadoSalario = salarioFixo + comissaoVenda + comissaoValorCarro
 
 return resultadoSalario
}

calculaSalario()
```