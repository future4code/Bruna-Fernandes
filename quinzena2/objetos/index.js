// exercício de interpretação de código 1
// primeiro console log - "Matheus Nachtergale"
// segundo console log - "Virginia Cavendish"
// terceiro console log - "canal: globo - 14hs"

// exercício de interpretação de código 2
// primeiro console log - nome: Juca, idade 3, raça SRD
// segundo console log - nome: Juba, idade 3, raça SRD
// terceiro console log - nome: Jubo, idade 3, raça SRD


// exercício de interpretação de código 3
// a - primeiro console log - Caio, false, segundo console log - Caio, undefined
// b - o valor da altura foi undefined por que a propriedade não está definida dentro do objeto


// exercício de escrita de código 1

// const pessoa = {
// nome: "Bruna",
// apelidos: ["Bru", "Una", "Bu"]

// }
// function frase (){
//     console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}`)
// return
// }
// frase()

// const novosApelidos = { ...pessoa,
//     apelidos: ["Trakinas", "Mã", "Vida"]
// }

// function novaFrase (){
//     console.log(`Eu sou a ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} ou  ${novosApelidos.apelidos[2]}`)
// return
// }
// novaFrase()


// exercício de escrita de código 2

// const objeto1 = { 
//     nome: "Bruna",
//     idade: 35,
//     profissão: "Adm"
// }

// const objeto2 = { 
//     nome: "Bruno",
//     idade: 34,
//     profissão: "Garçon"
// }
// function listaObjetos (){
//     const objetos = [objeto1.nome,objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length,]
// console.log (objetos)
// return objetos
// }

// listaObjetos()

// exercício de escrita de código 3
// const carrinho = []

// const frutas =[
// {nome1: "Banana", disponibilidade: true,}, 
// {nome2: "Morango", disponibilidade: true,},
// {nome3: "Amexa", disponibilidade: true,}
// ]


// carrinho.push(frutas)

// console.log (carrinho)


///Desafios Ebaaaaa Primeira vez que consigo chegar neles na data!!!!

//Desafio 1

// function perguntasUsuário (){
// const nomeUsuário = prompt("Qual seu nome?")
// const idadeUsuário = prompt("Qual sua idade?")
// const profissãoUsuário = prompt("Qual sua profissão?")

// const usuário = { 
//     nome: nomeUsuário,
//     idade: idadeUsuário,
//     profissão: profissãoUsuário
// }
// return usuário

// }

// console.log (perguntasUsuário())
// console.log (typeof perguntasUsuário)


//Desafio 2
// function filmes (){
//     const filme1 = {
//     nome: "A Bela e a Fera", 
//     anoDeLançamento: 1991,
// }
//     const filme2 ={ 
//     nome: "Frozen: Uma aventura congelante",
//     anoDeLançamento: 2014,
// }

// console.log ("O primeiro filmefoi lançado antes do segundo?", filme1.anoDeLançamento<filme2.anoDeLançamento)
// console.log ("O primeiro filmefoi lançado no mesmo ano do segundo?", filme1.anoDeLançamento===filme2.anoDeLançamento)
// return
// }

// filmes()

// Desafio 3 

const carrinho = []

const frutas =[
{nome1: "Banana", disponibilidade: true,}, 
{nome2: "Morango", disponibilidade: true,},
{nome3: "Amexa", disponibilidade: true,}
]


// carrinho.push(frutas)

// console.log (carrinho)
console.log (!frutas[0].disponibilidade)
