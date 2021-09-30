//Exercício de interpretação de código 1
//a. O console log vai imprimir o array inteiro , nomes seguido de apelidos e o numero do array

//Exercício de interpretação de código 2
// a. o console log vai imprimir todos os nomes da array

//Exercício de interpretação de código 3
//a. o consolelog vai imprimir todos os apelido menos o da Chijo


//Exercício de escrita de código 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// A.
//  const somenteNomes = pets.map((pets, index, array) =>{
//      return pets.nome
//  })

//  console.log (somenteNomes)


//B.
// const petsSalsichas = pets.filter((pets, index, array) =>{
//     return pets.raca ==="Salsicha"
// })

// console.log (petsSalsichas)

//C.
// let premioPoodles = pets.filter((pets, index)=>{
//     return pets.raca === "Poodle" 
   
// })
// let mapPoodle = premioPoodles.map((Poodle)=>{
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${Poodle.nome}`
// })

// console.log (mapPoodle)

//Exercício de escrita de código 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A.

// const somenteNomes = produtos.map((produtos) =>{
//      return produtos.nome
//  })

// console.log (somenteNomes)

//B.
// const novoPreco = produtos.map((item)=>{

// const novoValor = (item.preco * 0,05)
//     const resultado = {
//         nome: item.nome,
//         preco: novoValor
//     }
// return resultado
// })

// console.log (novoPreco)

//C.
// const produtosBebidas = produtos.filter ((produtos)=>{
// return produtos.categoria === "Bebidas"

// })
// console.log (produtosBebidas)

//D. 
const produtosYpe = produtos.filter ((produtos)=>{
    return produtos.nome.includes("Ypê")
})

// console.log (produtosYpe)

//E.
const compraYpe = produtosYpe.map ((produtos)=>{
    return `Compre ${produtos.nome} por ${produtos.preco}`
})

console.log (compraYpe)