function cadastraCarro(carros) {
  const marca = prompt('Digite a marca do carro:')
  const modelo = prompt('Digite o modelo do carro:')
  const cor = prompt('Digite a cor do carro:')

  const carro = {
    modelo,
    marca,
    cor,
  }

  carros.push(carro)
}

function exibeTelaDeCadastro() {
  const carros = []
  let desejaContinuar = "S"

  while(desejaContinuar === "S") {
    cadastraCarro(carros)
    desejaContinuar = prompt('Deseja continuar (S/N)').toUpperCase()
  }
}

exibeTelaDeCadastro()
console.log(carros)