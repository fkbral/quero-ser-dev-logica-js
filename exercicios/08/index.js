// alternativa a
function checaPar(numero) {
  const ehPar = numero % 2 === 0
  // const mensagem = 'O número ' + numero + ' é par: ' + ehPar
  // alert('O número ' + numero + ' é par: ' + ehPar)

  // return 'O número ' + numero + ' é par: ' + ehPar
  // return mensagem
  return ehPar
}

// alternativa b
const checaParAlt = (numero) => {
  const ehPar = numero % 2 === 0
  // const mensagem = 'O número ' + numero + ' é par: ' + ehPar
  // alert('O número ' + numero + ' é par: ' + ehPar)

  // return 'O número ' + numero + ' é par: ' + ehPar
  // return mensagem
  return ehPar
}

// alternativa c

function checaParComPrompt() {
  const numero = Number(prompt('Entre com um número para checar se é par: '))
  const ehPar = numero % 2 === 0

  return ehPar
}

const checaParComPromptAlt = () => {
  const numero = Number(prompt('Entre com um número para checar se é par: '))
  const ehPar = numero % 2 === 0
  
  return ehPar
}

console.log(checaPar(23))
console.log(checaParAlt(12))
console.log(checaParComPrompt())
console.log(checaParComPromptAlt())