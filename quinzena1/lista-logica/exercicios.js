// Exemplos


// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

let altura = Number(prompt("Digite a altura do retangulo."))
let largura = Number(prompt("Digite a largura do retangulo."))
  
let areaDoRetangulo = altura * largura

console.log (areaDoRetangulo)

return

}


// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

const anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
let anoAtual = Number(prompt("Qual ano estamos?"))

let idade = anoDeNascimento - anoAtual

console.log (idade)


}


// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

let pesoUsuário = Number(prompt("Digite seu peso"))
let alturaUsuário = Number(prompt("Digite sua altura"))
    
let IMC = pesoUsuário / (alturaUsuário*alturaUsuário)
  
console.log (IMC)

return
}





// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nomeUsuário = prompt("Digite seu Nome")
  let idadeUsuário = prompt("Digite sua idade")
  let emailUsuário = prompt("Digite seu e-mail")
  
console.log (`Meu nome é ${nomeUsuário}, tenho ${idadeUsuário} anos, e o meu email é ${emailUsuário}.`)

}




// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  
  let cor1 = prompt("Digite uma cor")
  let cor2 = prompt("Digite uma cor")
  let cor3 = prompt("Digite uma cor")

  let listaDeCores = [cor1,cor2,cor3]
  
  console.log (listaDeCores)

}



// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

let fraseUsuario = prompt("Digite uma frase")

console.log (fraseUsuario.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
let custoDoEspetáculo = prompt("Qual foi o custo total do espetáculo")
let precoDosIngressos = prompt("Qual preço foi pago no ingresso do espetáculo")

let quantidadeParaLucro = custoDoEspetáculo / precoDosIngressos

console.log (quantidadeParaLucro)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let fraseTamanho1 = prompt("Digite uma frase")
  let fraseTamanho2 = prompt("Digite outra frase")
  
  let tamanhoString = fraseTamanho1.length === fraseTamanho2.length
  
  console.log (tamanhoString)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let fraseIgual1= prompt("Digite uma frase")
  let fraseIgual2 = prompt("Digite outra frase")
  
  let frasesIguais = fraseIgual1.toUpperCase() === fraseIgual2.toUpperCase()

console.log (frasesIguais)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  let anoAtual =  prompt("Qual ano atual")
  let nascimento = prompt("Qual sua data de nascimento")
  let anoEmissao = prompt("Qual ano de emissao do RG")
  let idade = anoAtual - nascimento
  let anoRG = anoAtual - anoEmissao 

  console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
 }


// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

let anoConsulta = prompt("Digite um ano:")


  bissexto1 = (anoConsulta % 400) === 0
  bissexto2 = ((anoConsulta % 4 === 0) && (anoConsulta % 100 !== 0))
  bissextoNao = anoConsulta && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const idade = prompt ("Você tem mais de 18 anos?")
  const ensinoMedio = prompt ("Você possui o ensino médio completo?")
  const disponibilidadeHorario = prompt ("Você possui disponibilidade no horário do curso?")
  
  let confirmação1 = idade.includes("sim")
  let confirmação2 = ensinoMedio.includes("sim")
  let confirmação3 = disponibilidadeHorario.includes("sim")

 console.log (confirmação1&&confirmação2&&confirmação3)

}