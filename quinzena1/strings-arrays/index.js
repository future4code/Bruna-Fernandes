/* Exercício 1*/
/* a - Undefined*/
/* b - null*/
/* c - tamanho 11*/
/* d - retonar numero 3 (lista)*/
/* e -*/
/* f - retorna 3+6 = 9*/


// array[i+1] = 19
// console.log('e. ', array)


/* Exercício 2*/
/* A frase que vai retornar é : SUBI NUM ONIBUS EM MIRROCOS*/


// Exercício de escrita de código 1

// let nomeUsuário = prompt ("Qual seu nome?")
// let emailDoUsuário = prompt ("Qual seu e-mail?")

// console.log ("O e-mail",emailDoUsuário, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeUsuário, ".")



// Exercício de escrita de código 2

// let comidasFavoritas = ["Lasanha","Strogonof","Feijoada","Vaca-Atolada"]

// console.log (comidasFavoritas)

// console.log ("Essas são as minhas comidas preferidas:")
// console.log (comidasFavoritas[0])
// console.log (comidasFavoritas[1])
// console.log (comidasFavoritas[2])
// console.log (comidasFavoritas[3])

// let comidaUsuario = prompt ("Qual sua comida preferida?")

// comidasFavoritas.splice (1,1)

// comidasFavoritas.push (comidaUsuario)

// console.log (comidasFavoritas)

// Exercício de escrita de código 3

let listaDeTarefas = []

let tarefaUsuário1 = prompt ("Qual a primeira tarefa que você precisa fazer no dia?")

listaDeTarefas.push (tarefaUsuário1)

let tarefaUsuário2 = prompt ("Qual a segunda tarefa que você precisa fazer no dia?")

listaDeTarefas.push (tarefaUsuário2)

let tarefaUsuário3 = prompt ("Qual a terceira tarefa que você precisa fazer no dia?")

listaDeTarefas.push (tarefaUsuário3)

console.log (listaDeTarefas)

let tarefaFeita = prompt ("Qual tarefa já foi realizada? 0, 1 ou 2?")

listaDeTarefas.splice (tarefaFeita,1)

console.log (listaDeTarefas)