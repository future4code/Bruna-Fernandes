// exercício de interpretação de código 1
// a. o codigo testa se o numero digitado pelo usuário é divisível por 2, sem resto na divisão
//b. numeros divisíveis por dois, numeros pares
//c. numeros que não são divisíveis por 2 numeros impares.

// exercício de interpretação de código 2
// a. O codigo serve para consulta de preço
// b. Será impresso: O preço da fruta maçã, é R$ 2,25
// c. Acredito que sem o break a mensagem ficaria com tudo que vem abaixo junto: ("O preço da fruta Pera, é R$ 5,50 default: preco = 5)

// exercício de interpretação de código 3
//a. a primeira linha pede ao usuário um numero
//b. O usuário que digitou 10 recebe: Esse numero passou no teste. 
//   O usuário que digitou -10 não receberá mensagem
// c. Haverá erro por que existe a variavel mensagem que não foi chamada

// exercício de escrita de código 1

// const idade = prompt(Number("Qual sua idade?"))

// if (idade>17) {
// console.log (`Voce pode dirigir.`)
// }
// else {
// console.log (`Você não pode dirigir.`)
// }

// exercício de escrita de código 2

// const periodoQueEstuda = prompt ("Qual periodo você estuda?Matutino (M), Vespertino(V) ou Noturno (N)")

// if (periodoQueEstuda === "M"){
//     console.log (`Bom dia!`)
// }
// else if (periodoQueEstuda === "V"){
//     console.log (`Boa Tarde!`)
// }
// else if (periodoQueEstuda === "N"){
//     console.log (`Boa Noite!`)
// }


// exercício de escrita de código 3

// const periodoQueEstuda = prompt ("Qual periodo você estuda?Matutino (M), Vespertino(V) ou Noturno (N)")

// switch(periodoQueEstuda){

//     case "M":
//         console.log (`Bom dia!`)
//         break

//     case "V":
//         console.log (`Boa tarde!`)
//         break
    
//     case "N":
//         console.log (`Boa noite!`)
//         break

//     default: 
//         console.log (`Período não encontrado`)
//}

// exercício de escrita de código 4
// const qualGeneroFilme = prompt ("Qual o genero do filme?")
// const qualPrecoIngresso = Number (prompt("Qual o preço do ingresso?"))


//     const aceitoGenero = qualGeneroFilme === "fantasia"
//     const aceitoPreco = qualPrecoIngresso < 15

//     const deuBomFilme = aceitoPreco && aceitoGenero

//     if (deuBomFilme){
//     console.log ("Bom filme!")
// } 
//     else
//     console.log ("Escolha outro filme")


// Desafio 1

// const qualGeneroFilme = prompt ("Qual o genero do filme?")
// const qualPrecoIngresso = Number (prompt("Qual o preço do ingresso?"))
// const lanchinho  = prompt ("Qual lanchinho você vai comprar?")

//     const aceitoGenero = qualGeneroFilme === "fantasia"
//     const aceitoPreco = qualPrecoIngresso < 15

//     const deuBomFilme = aceitoPreco && aceitoGenero

//     if (deuBomFilme){
//     console.log (`Bom filme! E aproveite seu ${lanchinho}.`)
//     }

// Desafio 2

const nomeUsuário = prompt ("Qual seu nome") 
const tipoDeJogo = prompt ("Qual o tipo de jogo (IN) ou (DO)")
const etapaJogo = prompt ("Qual etapa do Jogo? (SF), (DT) ou (FI)") 
const categoria = Number (prompt ("Qual categoria? 1, 2, 3 ou 4") )
const quantidadeDeIngressos = Number (prompt("Quantos ingressos quer"))
 
let valorIngresso

if (tipoDeJogo===DO)

{switch (valorIngresso) {
    case etapaJogo==="SF":
        if (categoria===1)
        valorIngresso = 1320,00
        
        else if (categoria===2)
        valorIngresso = 880,00

        else if (categoria===3)
        valorIngresso = 550,00

        else if (categoria===4)
        valorIngresso = 220,00
        
        break;

    case etapaJogo==="DT":

        if (categoria===1)
        valorIngresso = 660,00
    
        else if (categoria===2)
        valorIngresso = 440,00

        else if (categoria===3)
        valorIngresso = 330,00

        else if (categoria===4)
        valorIngresso = 170,00
    
        break;

    case etapaJogo==="FI":

        if (categoria===1)
        valorIngresso = 1980,00
        
        else if (categoria===2)
        valorIngresso = 1320,00
    
        else if (categoria===3)
        valorIngresso = 880,00
    
        else if (categoria===4)
        valorIngresso = 330,00
        
        break;    
            
    default:
     console.log ("Insira novamente as opções!")
    break;
}
}

else if (tipoDeJogo==="IN")

{switch (valorIngresso) {
    case etapaJogo==="SF":
        if (categoria===1)
        valorIngresso = 1320,00 *4,10
        
        else if (categoria===2)
        valorIngresso = 880,00*4,10

        else if (categoria===3)
        valorIngresso = 550,00*4,10

        else if (categoria===4)
        valorIngresso = 220,00*4,10
        
        break;

    case etapaJogo==="DT":

        if (categoria===1)
        valorIngresso = 660,00*4,10
    
        else if (categoria===2)
        valorIngresso = 440,00*4,10

        else if (categoria===3)
        valorIngresso = 330,00*4,10

        else if (categoria===4)
        valorIngresso = 170,00*4,10
    
        break;

    case etapaJogo==="FI":

        if (categoria===1)
        valorIngresso = 1980,00*4,10
        
        else if (categoria===2)
        valorIngresso = 1320,00*4,10
    
        else if (categoria===3)
        valorIngresso = 880,00*4,10
    
        else if (categoria===4)
        valorIngresso = 330,00*4,10
        
        break;    
            
    default:
     console.log ("Insira novamente as opções!")
    break;
}
}


console.log (
    `---Dados da Compra ---
    Nome do cliente: ${nomeUsuário}
    Tipo de jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaJogo}
    Categoria: ${etapaJogo}
    Quantidade de ingressos: ${quantidadeDeIngressos} ingressos
    --- Valores---
    Valor do ingresso: ${valorIngresso}
    Valor total: ${valorIngresso*quantidadeDeIngressos}
    `)



