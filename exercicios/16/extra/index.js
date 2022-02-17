function cadastraCarro(carros) {
  const coresDisponiveis = ['prata', 'preto', 'branco', 'vermelho']
  
  const marca = prompt('Digite a marca do carro:')
  const modelo = prompt('Digite o modelo do carro:')
  let cor

  while (!cor) {
    const corDigitada = prompt(
      'Digite a cor do carro: (as cores disponíveis são ' + coresDisponiveis + ')'
    ).toLowerCase()

    cor = verificaCorDisponivel(corDigitada, coresDisponiveis)
  }

  const carro = {
    modelo,
    marca,
    cor,
  }

  carros.push(carro)
}

function verificaCorDisponivel(corDigitada, coresDisponiveis) {
  if (coresDisponiveis.includes(corDigitada)) {
    return corDigitada
  }

  alert('Escolha uma cor válida!')

  return undefined
}

function exibeTelaDeCadastro() {
  const carros = []

  let desejaContinuar = "S"

  while(desejaContinuar === "S") {
    cadastraCarro(carros)
    desejaContinuar = prompt('Deseja continuar (S/N)').toUpperCase()
  }
  
  console.log(carros)
}

exibeTelaDeCadastro()