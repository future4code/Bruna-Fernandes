//Exercício 1 - a - Acessamos através do terminal com node e nome do arquivo ou process.argv

//Exercício 1 - b

//const nome = process.argv [2] //Bruna
//const idade = process.argv [3] //35
//const novaIdade = process.argv [4] //idade + 7

//console.log (`Olá, ${nome}! Você tem sua ${idade} anos.`)

//console.log (`Olá, ${nome}! Você tem sua ${idade} anos. Em sete anos você terá ${novaIdade})"`)

// Exercício 2

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operação){
	case "soma":
		num1 + num2
		break;
	case "subt":
		num1 - num2
		break;
	case "mult":
		num1 * num2
		break;
	case "div":
		num1 / num2
		break;
    }

const retorno = operação

console.log(retorno)

