let minhaString: string = "String"
let number: number = 9

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} 

enum corFavorita{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-Escuro",
    VIOLETA = "Violeta"
}

let Bananinha: pessoa ={
    nome: "Bananinha",
    idade: 30,
    corFavorita: corFavorita.AMARELO
}

let Felicidade: pessoa={
    nome: "Felicidade",
    idade: 25,
    corFavorita: corFavorita.AZUL
}

let Sonho: pessoa={
    nome: "Sonho",
    idade: 20,
    corFavorita: corFavorita.LARANJA
}
console.log (Bananinha)