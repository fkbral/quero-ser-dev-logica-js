const impostos = [
  {
    nome: 'IPTU',
    valor: 200,
  },
  {
    nome: 'IPVA',
    valor: 3000,
  },
  {
    nome: 'Conta de Luz',
    valor: 180,
  },
  {
    nome: 'Conta de Água',
    valor: 40,
  }
]

// const totalAPagar = impostos.reduce((soma, imposto, indice, arrayOriginal) => {
const totalAPagar = impostos.reduce((soma, imposto) => {
  console.log(soma)
  return soma + imposto.valor
}, 1)

// jeito 1 de formatar moedas
const formatadorDeMoeda = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const totalFormatadoEmMoeda = formatadorDeMoeda.format(totalAPagar)

// jeito 2 de formatar moedas
const totalFormatadoEmMoedaAlt = totalAPagar.toLocaleString(
  'pt-BR', { style: 'currency', currency: 'BRL' }
)

console.log(totalAPagar)
console.log(totalFormatadoEmMoeda)