const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
]

const horarioAtual = new Date().getHours()

const restaurantesAbertos = restaurantes.filter((restaurante) => {
  let { horario_abertura, horario_fechamento } = restaurante

  if(horario_fechamento > horario_abertura) {
    horario_fechamento += 24
  }

  return horarioAtual >= horario_abertura && horarioAtual < horario_fechamento
})

console.log(restaurantesAbertos)