// EXERCÍCIO 01
function inverteArray(array) {

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  
  const expressoes = [
  
  booleano1 && booleano2 && !booleano4,
  
  (booleano1 && booleano2) || !booleano3,
  
  (booleano2 || booleano3) && (booleano4 || booleano1),
  
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
  return expressoes
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let pares = []
  for (let numero = 0; pares.length < n; numero++)
    if (numero %2===0){
      pares.push(numero)
    }
    return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a===b && a===c){
    return 'Equilátero'
  }
  else if (a===b || a===c || b===c){
    return 'Isósceles'
  }
  else {
    return 'Escaleno' 
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior = 0
  let menor = 0

  if (num1>num2){
    maior = num1
    menor = num2
  }
  else{
    maior = num2
    menor = num1 
  }
  let maiorDivisivelPorMenor = (maior, menor) =>{
    if (maior % menor === 0){
      return true
    }
    return maiorDivisivelPorMenor
  }
   let diferenca = maior - menor

  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

let maiores = []





}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
    const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let calculoRetangulo={
    largura: lado1,
    altura: lado2,
    perimetro: 2*(lado1+lado2),
    area: lado1*lado2
  }
  return calculoRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO";

return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

let filtroAdultos = arrayDePessoas.filter((arrayDePessoas)=>{
  return arrayDePessoas.idade>=18
})
return filtroAdultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {



}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
