const numero1 = 2
const numero2 = 5

const primeiroEhMaiorQueSegundo = numero1 > numero2
console.log(numero1 + ' é maior que ' + numero2 + ': ' + primeiroEhMaiorQueSegundo)

const primeiroEhMenorQueSegundo = numero1 < numero2
console.log(numero1 + ' é menor que ' + numero2 + ': ' + primeiroEhMenorQueSegundo)

const primeiroEhMaiorOuIgualASegundo = numero1 >= numero2
console.log(numero1 + ' é maior ou igual a ' + numero2 + ': ' + primeiroEhMaiorOuIgualASegundo)

const primeiroEhMenorOuIgualASegundo = numero1 <= numero2
console.log(numero1 + ' é menor ou igual a ' + numero2 + ': ' + primeiroEhMenorOuIgualASegundo)

const primeiroEhIgualAoSegundo = numero1 === numero2
console.log(numero1 + ' é igual ao ' + numero2 + ': ' + primeiroEhIgualAoSegundo)

const primeiroEhDiferenteDeSegundo = numero1 !== numero2
console.log(numero1 + ' é diferente de ' + numero2 + ': ' + primeiroEhDiferenteDeSegundo)

// é extremamente importante que nós sempre façamos nossas comparações 
// com três iguais para garantir que os tipos das variáveis comparadas
// são iguais
console.log(2 == "2") // retorna verdadeiro
console.log(2 === "2") // retorna falso

// desigualdade
console.log(2 != "2") // retorna falso
console.log(2 !== "2") // retorna verdadeiro