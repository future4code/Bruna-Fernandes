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

let qualAnoAtual = Number(prompt("Qual ano estamos?"))
let anoDeNascimentoUsuario = Number(prompt("Qual seu ano de nascimento?"))
let anoEmissaoRG = Number(prompt("Qual ano de emissão do seu RG?"))

let idadeexercicio10 = qualAnoAtual - anoDeNascimentoUsuario
let tempodeRG = qualAnoAtual - anoEmissaoRG

let vinteanos = idadeexercicio10 <=20
let vinteumcinquenta = idadeexercicio10 >20 <=50
let cinquentaanos = idadeexercicio10 >50

let RGvinte = tempodeRG >= 5
let RGvinteumcinquenta = tempodeRG = 10
let RGcinquenta = tempodeRG = 15

console.log (vinteanos&&RGvinte||vinteumcinquenta&&RGvinteumcinquenta||cinquentaanos&&RGcinquenta)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}