const numeros = [12, 5, 8, 130, 44]

// use o método filter para gerar um array apenas com os número maiores ou iguais a 10
// const numerosMaioresQueDez = numeros.filter((numero) => {
//   return numero >= 10
// })

// for (let numero of numeros) {
//   console.log(numero)
// }

// sempre nas nossas high order functions teremos:
// primeira posição (ou primeiro parâmetro): valor do elemento do array 
// segunda posição: índice do elemento do array 
// terceira posição: array inteiro 

const numerosMaioresQueDez = numeros.filter(
  (numero, indice, elementosDoArray) => {
    console.log('elemento de índice ' + indice + ':' + numero)
    // console.log(elementosDoArray)
    return numero >= 10
  })

// é a mesma passagem que a de cima, porém numa sintaxe mais curta
// const numerosMaioresQueDez = numeros.filter(numero => numero >= 10)

// console.log(numeros)
// console.log(numerosMaioresQueDez)