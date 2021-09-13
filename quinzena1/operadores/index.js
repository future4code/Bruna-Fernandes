// Exercício 1
// Resultado a. false
// Resultado b. false
// Resultado c. false
// Resultado d. booleano

// Exercício 2
// Faltou definir o typof que o prompt pode receber como "Number" a impressão será as respostas em sequencia 

// Exercício 3
//Sugestão do código

//let primeiroNumero = Number(prompt(" Digite um numero! "))
//let segundoNumero = Number(prompt(" Digite outro numero! "))

//const soma = primeiroNumero + segundoNumero

//console.log(soma)


//Exercícios de escrita de codigo

//Exercício 1

let suaIdade = Number (prompt ("Qual a sua idade?"))
let idadeAmigo = Number (prompt ("Qual a idade do seu melhor amigo(a)"))

let comparação = suaIdade > idadeAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", comparação) 

let diferença = suaIdade - idadeAmigo

console.log ("A diferença das idade é ", diferença)



// Exercício 2

let numPar = Number (prompt ("Digite um numero par"))

let resto = numPar % 2

console.log ("Este é o resto da divião", resto)


//C) a divisão de numero par por 2 nunca dará resto
//D) a divisão de um numero impar por 2 sobrará resto

//Exercício 3

let suaIdade = Number (prompt ("Qual a sua idade?"))

let idadeMeses = suaIdade * 12
let idadeDias = suaIdade * 365
let idadeHoras = suaIdade * 8760


console.log ("Sua idade em meses é", idadeMeses)
console.log ("Sua idade em dias é", idadeDias)
console.log ("Sua idade em horas é", idadeHoras)

// Exercício 4

let primeiroNumero = Number (prompt ("Digite um numero"))
let segundoNumero = Number (prompt ("Digite outro numero"))

let divisívelPrimeiroSegundo = primeiroNumero % segundoNumero
let divisívelSegundoPrimeiro = segundoNumero % primeiroNumero

console.log ("O primeiro numero é maior que o segundo?",(primeiroNumero>segundoNumero) )
console.log ("O primeiro numero é igual ao segundo?",(primeiroNumero===segundoNumero) )
console.log ("O primeiro numero é divisível pelo segundo?",(divisívelPrimeiroSegundo===0) )
console.log ("O segundo numero é divisível pelo primeiro?",(divisívelSegundoPrimeiro===0) )
