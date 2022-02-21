const jogadores = [
  {
    nome: 'Marta',
    camisa: 10,
    altura: 1.6,
  },
  {
    nome: 'Gabigol',
    camisa: 9,
    altura: 1.7,
  },
  {
    nome: 'Everton Ribeiro',
    camisa: 7,
    altura: 1.6,
  },
]

// find: retorna o primeira correspondência 
// e se não achar algum valor correspondente retorna undefined (no fundo não retorna nada)

// encontrar jogadora de nome Marta
// const procuraPorJogadorMarta = jogadores.find(
  //   function (jogador) {
//     return jogador.nome === 'Marta'
//   }
// )

// sintaxe simplificado com arrows function
const procuraPorJogadorMarta = jogadores.find(
  (jogador) => {
    return jogador.nome === 'Marta'
  }
)

// encontrar primeiro jogador com 1.6m
const procuraPorJogadorDe160cm = jogadores.find(
  (jogador) => jogador.altura === 1.6
)

console.log(procuraPorJogadorMarta)
console.log(procuraPorJogadorDe160cm)

// filter: cria um novo array com todos os valores correspondentes

const procuraPorJogadoresDe160cm = jogadores.filter(
  (jogador) => jogador.altura === 1.6
)

const procuraPorJogadoresComMaisDe150cm = jogadores.filter(
  (jogador) => jogador.altura > 1.5
)

const procuraPorJogadoresComMaisDe180cm = jogadores.filter(
  (jogador) => jogador.altura > 1.8
)

console.log(procuraPorJogadoresDe160cm)
console.log(procuraPorJogadoresComMaisDe150cm)
console.log(procuraPorJogadoresComMaisDe180cm)

