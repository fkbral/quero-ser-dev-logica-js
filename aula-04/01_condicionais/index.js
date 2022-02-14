function checaPar(numero) {
  const ehPar = numero % 2 === 0

  if (ehPar) {
    return 'par'
  }

  return 'ímpar'
}

let palavra = "not ok"

if (false) {
  palavra = "ok2"
}

if (true) {
  palavra = "ok1"
  const teste = "teste 1"
  console.log(teste)
}

console.log(palavra)
// não posso tentar acessar varíaveis que foram declaradas dentro de um if ou else
// console.log(teste)

// console.log(checaPar(11))

const numeroTeste = 10
const ehPar = numeroTeste % 2 === 0

if (ehPar) {
  console.log('par')
}
else {
  console.log('ímpar')
}

