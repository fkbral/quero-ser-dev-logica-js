// const numeroInteiro = 40
// const numeroReal = 10.5

// console.log(numeroInteiro)
// console.log(numeroReal)

// console.log("Olá " + "usuário")
// const soma = numeroInteiro + numeroReal

// console.log(soma)

// se somo 2 + 3 como strings
// poderíamos pensar que o resultado esperado seria 5
// mas como a soma é feita como uma concatenação de strings
// resulta em 23

// Devemos tratar essa conversão de string para número
// Como?
// 3 formas:
// - função parseInt()
// - função parseFloat()
// - função Number()
// cuidado: não podemos somar números com textos, pois o js converterá tudo
// para textos

// não podemos somar algo que não conseguiu ser convertido para número
// pelo parseInt(), parseFloat(), Number() com um número
// - isto vai nos retornar um valor que não é um número
// ou mais especificamente o NaN do JavaScript (Not a Number)

// Resolução 1
// const primeiroNumero = prompt('Digite o primeiro número:')
// console.log(primeiroNumero)

// const segundoNumero = prompt('Digite o segundo número:')
// console.log(segundoNumero)

// const primeiroNumeroTratado = parseInt(primeiroNumero)
// const segundoNumeroTratado = parseInt(segundoNumero)

// console.log(primeiroNumeroTratado)
// console.log(segundoNumeroTratado)

// const soma = primeiroNumeroTratado + segundoNumeroTratado
// console.log(soma)

// Resolução 2
const primeiroNumero = parseFloat(prompt('Digite o primeiro número:'))
console.log(primeiroNumero)

const segundoNumero = parseFloat(prompt('Digite o segundo número:'))
console.log(segundoNumero)

const soma = primeiroNumero + segundoNumero
console.log(soma)
