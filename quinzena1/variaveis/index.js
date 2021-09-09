// Exercidio de interpreção 1
// console.log(b) será impresso 10 console.log (a,b) será impresso 10 5

//Exercicio de interpretação 2
// console.log (a,b,c) = 10 10 10

// Exercicio de interpretação 3
// let p = prompt("Quantas horas você trabalha por dia?") = qntsHorasTrabalhaDia
// let t = prompt("Quanto você recebe por dia?") qualSalarioDiario
// alert(`Voce recebe ${qualSalarioDiario/qntsHorasTrabalhaDia} por hora`)

const nomeCompleto = "Bruna Alvarez"
let idade = 35

console.log (typeof nomeCompleto)
console.log (typeof idade)

// Foi impresso string para o nome completo por que a resposta está entre aspas e é um texto
// Foi impresso nunber para a idade por que a numeração está sem aspas

//const nomeCompleto = prompt("Qual é seu nome completo")
//let idade = prompt("Qual é sua idade")

// Não foi possível a pergunta por que as variaveis já estavam declaradas.

console.log ("Olá",nomeCompleto, "você tem", idade, "anos.")

let programador = prompt ("Você já usou a linguagem Javascript")
let cinefilo = prompt ("Você gosta de cinema")
let esportista = prompt ("Você pratica atividades fisicas")

console.log ("Você já usou a linguagem Javascript", programador,)
console.log ("Você gosta de cinema",cinefilo,)
console.log ("Você pratica atividades fisicas",esportista,)

let a = 10
let b = 25
let c = 0

c=a
a=b
b=c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
