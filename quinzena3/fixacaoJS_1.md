function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

let porcentagem = (valorTotalVendas* 0.05)
let paraCadaCarro = qtdeCarrosVendidos * 100

let salarioPorCarro = porcentagem + paraCadaCarro

let salario = 2000 + salarioPorCarro

return salario
}
