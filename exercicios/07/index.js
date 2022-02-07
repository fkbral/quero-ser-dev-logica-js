// alternativa a
function dobraNumero(numeroParaDobrar) {
  return numeroParaDobrar * 2
}

// alternativa b
const dobraNumeroArrow = (numeroParaDobrar) => {
  return numeroParaDobrar * 2
}

// alternativa c
const dobraNumeroSemParametros = () => {
  const numeroParaDobrar = Number(
    prompt('Entre com um número para dobrar: ')
  )
  return numeroParaDobrar * 2
}

console.log(dobraNumero(10))
console.log(dobraNumeroArrow(10))
console.log(dobraNumeroSemParametros())