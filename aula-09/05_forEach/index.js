// imagine que você queira apenas percorrer um array e executar uma operação
const aluna = {
  nome: "Maria",
  idade: 27,
  cpf: "123.456.789-02",
  notas: [9, 6, 7],
  media: null,
}

function calculaMedia(notas) {
  let soma = 0

  // for (let nota of notas) {
  //   soma += nota
  // }

  notas.forEach((nota) => {
    soma += nota
  })

  const media = soma/notas.length

  return media
}

console.log(calculaMedia(aluna.notas))