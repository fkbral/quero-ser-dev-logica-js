// pop, shift, splice

const equipamentos = ["capacete", "máscara", "óculos", "colete"]

console.log(equipamentos)

// remover o último elemento
// equipamentos.pop()

// console.log(equipamentos)

// // remover o primeiro elemento
// equipamentos.shift()

// console.log(equipamentos)

// com splice posso remover elementos de um array da seguinte forma:
// primeiro parametro = índice para começar remoção
// segundo parametro = quantos elementos remover
// terceiro parametro (opcional) = quais elementos colocar no lugar
// equipamentos.splice(0, 1)

equipamentos.splice(1, 2, 'cinto', 'bota')

console.log(equipamentos)