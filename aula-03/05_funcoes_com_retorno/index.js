function soma(numero1, numero2) {  
  const resultado = numero1 + numero2
  return resultado
}

function somaSemParametros() {  
  const numeroDigitado1 = Number(prompt('Digite o primeiro número'))
  const numeroDigitado2 = Number(prompt('Digite o segundo número'))
  
  const resultado = numeroDigitado1 + numeroDigitado2
  return resultado
}

// sintaxe arrow funcion
// () => {}
const somaArrow = (numero1, numero2) => {
  const resultado = numero1 + numero2
  return resultado
}

const valor = soma(10, 2)
console.log(valor)
console.log(somaSemParametros())
console.log(somaSemParametros())

// const somaParcial = soma(2, 3)
// console.log(somaParcial)

// const resultadoFinal = soma(somaParcial, 7)
// console.log(resultadoFinal)

// console.log(soma(somaParcial, 7))

// const somaTotal = soma(10,2) + soma(1, 1) + soma(3,6)

// console.log(somaTotal)

// 10 + 2