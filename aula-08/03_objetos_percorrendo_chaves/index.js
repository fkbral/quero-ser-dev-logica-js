const aluna = {
  nome: "Maria",
  idade: 27,
  cpf: "123.456.789-02",
  notas: [9, 6, 7],
  media: null,
}

function calculaMedia(notas) {
  let soma = 0
  console.log(notas)

  for (let nota of notas) {
    soma += nota
  }

  const media = soma/(notas.length)

  return media
}

// for in é utilizado para percorrer as propriedades de nosso objeto
for (let propriedade in aluna) {
  // console.log(propriedade)
  // console.log(aluna[propriedade])

  if (propriedade === 'notas') {
    aluna.media = calculaMedia(aluna[propriedade])
    // aluna['media'] = calculaMedia(aluna[propriedade])
  }
}

console.log(aluna)