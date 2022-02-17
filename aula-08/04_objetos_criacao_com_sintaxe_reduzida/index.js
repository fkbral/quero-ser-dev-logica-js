const nome = prompt('Entre com um nome:')
const idade = parseInt(prompt('Entre com a idade'))

// const usuario = {
//   nome: nome,
//   idade: idade,
// }

// short syntax ou sintaxe reduzida
// funciona se já tivermos variáveis com os mesmos nomes das nossas
// propriedades
const usuario = {
  nome,
  idade,
}

console.log(usuario)