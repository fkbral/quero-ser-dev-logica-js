let desejaContinuar = "S"

while(desejaContinuar === "S") {
  const nome = prompt('Entre com seu nome:')

  alert('Olá, ' + nome)

  desejaContinuar = prompt('Digite S/N').toUpperCase()
}

// while(true) {
//   const nome = prompt('Entre com seu nome:')

//   alert('Olá, ' + nome)

//   const desejaContinuar = prompt('Digite S/N').toUpperCase()

//   if (desejaContinuar !== "S") {
//     break
//   }
// }

alert('cadastros efetuados')