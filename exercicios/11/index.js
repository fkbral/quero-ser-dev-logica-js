const checaAtracoes = (idade, altura) => {
  let mensagem = ''
  
  if(altura >= 1 && idade >= 3) {
    // mensagem = mensagem + 'carrossel '
    mensagem += 'carrossel\n'
  }

  if(altura <= 1.3 && idade >= 4 && idade <= 9) {
    // mensagem = mensagem + 'piscina de bolinhas'
    mensagem += 'piscina de bolinhas\n'
  }

  if(altura >= 1.1) {
    // mensagem = mensagem + 'montanha-russa'
    mensagem += 'montanha-russa'
  }

  return mensagem
}

const checaAtracoesAlt = (idade, altura) => {
  const podeAndarDeCarrousel = altura >= 1 && idade >= 3
  const podeEntrarNaPiscina = altura <= 1.3 && idade >= 4 && idade <= 9 
  const podeAndarDeMontanhaRussa = altura >= 1.1

  if(podeAndarDeCarrousel && !podeEntrarNaPiscina && !podeAndarDeMontanhaRussa) {
    return 'Pode andar de carrousel'
  }

  if(!podeAndarDeCarrousel && podeEntrarNaPiscina && !podeAndarDeMontanhaRussa) {
    return 'Pode entrar na piscina de bolinhas'
  }

  if(!podeAndarDeCarrousel && podeEntrarNaPiscina && !podeAndarDeMontanhaRussa) {
    return 'Pode andar na montanha russa'
  }

  if(podeAndarDeCarrousel && podeEntrarNaPiscina && !podeAndarDeMontanhaRussa) {
    return 'Pode andar de carrousel e entrar na piscina de bolinhas'
  }

  if(podeAndarDeCarrousel && !podeEntrarNaPiscina && podeAndarDeMontanhaRussa) {
    return 'Pode andar de carrousel e andar na montanha russa'
  }

  if(!podeAndarDeCarrousel && podeEntrarNaPiscina && podeAndarDeMontanhaRussa) {
    return 'Pode entrar na piscina de bolinhas e andar na montanha russa'
  }

  if(podeAndarDeCarrousel && podeEntrarNaPiscina && podeAndarDeMontanhaRussa) {
    return 'Pode andar no carrousel, entrar na piscina de bolinhas e andar na montanha russa'
  }
}

const idade = Number(prompt('Entre com sua idade: '))
const altura = Number(prompt('Entre com sua altura: '))
// const atracoesPermitidas = checaAtracoes(idade, altura)
console.log(checaAtracoesAlt(idade, altura))

// console.log('As atrações permitidas são:\n' + atracoesPermitidas)
