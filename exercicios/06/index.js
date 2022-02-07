const numeroDigitado = parseInt(prompt('Entre com um número para verificar se é par:'))

const numeroEhPar = numeroDigitado % 2 === 0
// const numeroEhImpar = numeroDigitado % 2 === 1
const numeroEhImpar = numeroDigitado % 2 !== 0

alert('O número digitado é par: ' + numeroEhPar)
alert('O número digitado é ímpar: ' + numeroEhImpar)

console.log(numeroDigitado)