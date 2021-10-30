// EXERCÍCIO 01
function inverteArray(array) {

let arrayInvertida = []
for (let i = array.length-1; i >=0; i--){
  arrayInvertida.push(array[i])

}
return arrayInvertida
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

let pares = []
for (let item of array){
  if (item % 2 === 0){
    let elevados = item * item
    pares.push(elevados)
}
}
return pares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let somentePares = []
  for (let item of array){
    if (item % 2 === 0){
      somentePares.push(item)
    }
  }
return somentePares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = 0
  for (let item of array){
    if (item>maiorNumero){
      maiorNumero = item
    }
    }
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let tamanhoArray = array.length 
  return tamanhoArray
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
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  const novaArray =[]
  for (item of array){
    let contador = 0
    for (itemComparado of array){
      if (item> itemComparado){
        contador = contador + 1
      }
    }
    novaArray[contador] = item
    }
  const segundos = [novaArray[novaArray.length-2],novaArray[1]]
  return segundos

}


// EXERCÍCIO 11
function ordenaArray(array) {
  const novaArray =[]
  for (item of array){
    let contador = 0
    for (itemComparado of array){
      if (item> itemComparado){
        contador = contador + 1
      }
    }
    novaArray[contador] = item
  }
  return novaArray
}

// EXERCÍCIO 12
function filmeFavorito(){
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
function anonimizaPessoa(pessoa){
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

  let filtroMenores = arrayDePessoas.filter((arrayDePessoas)=>{
    return arrayDePessoas.idade<18
  })
  return filtroMenores
  }

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let duasvezes = array.map ((array)=>{
    return array*2
  })
  return duasvezes
  }

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

  let duasvezes = array.map ((array)=>{
   return array*2
 })
 
 let paraString = duasvezes.map ((duasvezes)=>{
   return duasvezes.toString()
 })
 return paraString
 }

// EXERCÍCIO 17C
function verificaParidade(array)  {

  let verificação = array.map((item)=>{
  
    if (item %2===0){
      return `${item} é par`
    }
    else{
      return `${item} é ímpar`
    }
    })
    return verificação
  }
// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let permissoes = pessoas.filter ((pessoas)=>{
  return (pessoas.altura >=1.5 && pessoas.idade>14 && pessoas.idade <60)
  
  })
  return permissoes
  }

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let excluidos = pessoas.filter ((pessoas)=>{
   return (pessoas.altura <1.5 || pessoas.idade <=14 || pessoas.idade >= 60)
  })
 
  return excluidos
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
