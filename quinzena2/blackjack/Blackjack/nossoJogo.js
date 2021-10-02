/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 

   console.log ("Boas vindas ao jogo de Blackjack!")

   if (confirm ("Quer iniciar uma nova rodada?")){
      let usuario1compra = comprarCarta()
      let usuario2compra = comprarCarta()

      let somaUsuário = usuario1compra.valor + usuario2compra.valor

      let pc1compra = comprarCarta()
      let pc2compra = comprarCarta()

      let somaPC = pc1compra.valor + pc2compra.valor

      console.log (`Usuário - cartas: ${usuario1compra.texto}  ${usuario2compra.texto} - ${somaUsuário}`)
      console.log (`Computador - cartas: ${pc1compra.texto}  ${pc2compra.texto} - ${somaPC}`)

      if (somaPC===somaUsuário){
         console.log (`Empate!`)
      }
      else if (somaPC<somaUsuário){
         console.log (`O usuário ganhou!`)
      }
      else if (somaPC>somaUsuário){
         console.log (`O computador ganhou!`)
      }
   }
   else {
      console.log ("O jogo acabou")
   }
   