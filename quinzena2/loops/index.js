// exercício de interpretação de código 1
// o código está imprimindo o numero 10

// exercício de interpretação de código 2
// a. o codigo vai imprimir todos os numeros do array maiores que 18
// b. 

// exercício de interpretação de código 3
// Vai imprimir 4 linhas com * 

// exercício de escrita de código 1

// const quantidadeAnimais = Number (prompt("Digite a quantidade de animais que você possui."))

// let nomeAnimais=[]
// if (quantidadeAnimais===0) {
// console.log ("Que pena! Você pode adotar um pet!")
// } else {
//     for (let i = 0; i < quantidadeAnimais; i++) {
//         let animais = prompt ("Digite o nome dos seus Pets")
//         nomeAnimais[i] = animais
//     }
// }
// console.log (nomeAnimais)

// exercício de escrita de código 2 - a.

// let arrayOriginal = [10,15,23,44,51]

// for (let i = 0; i < 1; i++){
//     const arrayimpressa = arrayOriginal
//     console.log (arrayimpressa)
// }

// exercício de escrita de código 2 - b.

// let arrayOriginal = [10,15,23,44,51]

// for (let i = 0; i < arrayOriginal.length; i++){
//     const arrayDividida = arrayOriginal[i]/10
//     console.log (arrayDividida)
// }

// exercício de escrita de código 2 - c.

// let arrayOriginal = [10,15,23,44,51]
// let pares =[]

// const verificaPares = (numeros) =>{
//    for (let numero of numeros){
//     if (numero %2===0){
//         pares.push(numero)
// }
// } 
// }
// verificaPares (arrayOriginal)
// console.log (pares)

// exercício de escrita de código 2 - d.

let arrayOriginal = [10,15,23,44,51]
let maior = 0
let menor = 51
for (let mais of arrayOriginal){
    if (mais > maior){
        maior = mais
    }
}

for (let menos of arrayOriginal){
    if (menos < menor){
        menor = menos
    }
}
let novoArray = [menor,maior]
console.log (novoArray)