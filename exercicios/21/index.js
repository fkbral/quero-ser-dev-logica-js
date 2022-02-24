const carrinho = [
  {
    produto: "Camisa branca:",
    quantidade: 4,
    valorDaUnidade: 25.50,
  },
  {
    produto: "Calça jeans:",
    quantidade: 2,
    valorDaUnidade: 180.25,
  },
  {
    produto: "Jaqueta",
    quantidade: 1,
    valorDaUnidade: 299.99,
  },
  {
    produto: "Tênis de Corrida",
    quantidade: 1,
    valorDaUnidade: 150.50,
  },
  {
    produto: "Par de meias",
    quantidade: 3,
    valorDaUnidade: 15.00,
  },
  {
    produto: "Relógio esportivo",
    quantidade: 1,
    valorDaUnidade: 350.00,
  },
]

const frete = 15

const totalDoCarrinho = carrinho.reduce((soma, produto) => {
  return soma + produto.valorDaUnidade * produto.quantidade
}, frete)

const totalFormatado = totalDoCarrinho.toLocaleString(
  'pt-BR',
  { style: 'currency', currency: 'BRL' }
)

// ou com INTL
// const totalFormatado = Intl.NumberFormat(
//   'pt-BR',
//   { style: 'currency', currency: 'BRL' }
// ).format(totalDoCarrinho)

console.log(totalFormatado)
